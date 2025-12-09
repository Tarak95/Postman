import React, { useState } from 'react'
import profilepic from "../../assets/profilepic.png"

import { RiEdit2Fill } from "react-icons/ri"
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { RiImageAddFill } from "react-icons/ri";
import { FaRegCircleQuestion } from "react-icons/fa6";

import { useDispatch, useSelector } from 'react-redux';
import { getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';
// import { userNameUpdate } from '../../slices/userSlice';
import { userNameUpdate, userStatusUpdate } from '../../slices/userSlice';


const SettingInfo = () => {

  const db = getDatabase()
  const auth = getAuth();
  const dispatch = useDispatch()
  const data = useSelector((selector) => selector.userInfo?.value?.user)

  
  const [show, setShow] = useState(false)
  const [newName, setNewName] = useState(data?.displayName || "")

  const [showStatus, setShowStatus] = useState(false)
  const [newStatus, setNewStatus] = useState(data?.status || "")

  
  const handleEditNameShow = () => setShow(!show)
  const handleEditStatusShow = () => setShowStatus(!showStatus)


  const handleEditName = () => {
    if (!newName.trim()) return alert("Name cannot be empty!");

    if (auth.currentUser && data?.uid) {
    
      updateProfile(auth.currentUser, { displayName: newName })
        .then(() => {
         
          update(ref(db, 'users/' + data.uid), { displayName: newName })
            .then(() => {
             
              dispatch(userNameUpdate(newName))
              console.log("Name Updated Successfully")
              setShow(false) 
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }

  
  const handleEditStatus = () => {
    if (!newStatus.trim()) return alert("Status cannot be empty!");

    if (auth.currentUser && data?.uid) {
      update(ref(db, 'users/' + data.uid), { status: newStatus })
        .then(() => {
          console.log("Status Updated Successfully")
          setShowStatus(false) 
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='font-primary shadow p-5 mt-5 w-[700px]'>
      <h2 className='text-3xl font-bold'>Profile Settings</h2>

      <div className='flex items-center gap-x-5 mt-10 border-b py-5'>
        <img className='w-[100px]' src={profilepic} alt="" />
        <div>
          <p className='text-2xl font-bold mb-2'>{data?.displayName}</p>
          <p>{data?.status || "Stay home stay safe"}</p>
        </div>
      </div>

      <div className='my-10'>

       
        <div className='flex items-center'>
          <RiEdit2Fill className='text-[25px]' />
          <p onClick={handleEditNameShow} className='text-lg font-semibold ml-[35px] cursor-pointer'>
            Edit Profile Name.
          </p>
        </div>

        {show && (
          <div className='mt-2'>
            <input
              type="text"
              value={newName}  
              onChange={(e) => setNewName(e.target.value)}
              placeholder='Edit name'
              className='border w-[300px] p-2'
            />
            <button onClick={handleEditName} className='bg-[#3D0275] text-white px-3 py-2 rounded ml-4'>
              submit
            </button>
          </div>
        )}

       
        <div className='flex items-center mt-[10px]'>
          <BiSolidMessageSquareDots className='text-[25px]' />
          <p onClick={handleEditStatusShow} className='text-lg font-semibold ml-[35px] cursor-pointer'>
            Edit Profile Status Info.
          </p>
        </div>

        {showStatus && (
          <div className='mt-2'>
            <input
              type="text"
              value={newStatus}  
              onChange={(e) => setNewStatus(e.target.value)}
              placeholder='Edit status'
              className='border w-[300px] p-2'
            />
            <button onClick={handleEditStatus} className='bg-[#3D0275] text-white px-3 py-2 rounded ml-4'>
              submit
            </button>
          </div>
        )}

        
        <div className='flex items-center mt-[10px]'>
          <RiImageAddFill className='text-[25px]' />
          <p className='text-lg font-semibold ml-[35px]'>Edit Profile Photo.</p>
        </div>

        <div className='flex items-center mt-[10px]'>
          <FaRegCircleQuestion className='text-[25px]' />
          <p className='text-lg font-semibold ml-[35px]'>Help.</p>
        </div>

      </div>
    </div>
  )
}

export default SettingInfo
