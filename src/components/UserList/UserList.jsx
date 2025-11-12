import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { FaSquarePlus } from "react-icons/fa6";

import { MdAddBox } from "react-icons/md";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';


const UserList = () => {

     const data = useSelector((selector) => (selector?.userInfo?.value?.user))
  console.log(data?.uid,'UID');


      const db = getDatabase();
  const [userList, setUserList] = useState([]); 

  useEffect(() => {
    const useRef = ref(db, "users");
    onValue(useRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({...item.val(), userid: item.key});
      });
      setUserList(arr);
    });
  }, []);
  console.log(userList);


     const handleFriendRequest = (item) => {
        console.log("ok", item)
        set(push(ref(db,'friendRequest/')), {
            senderName: data.displayName,
            senderId:data.uid,
            receiverName: item.username
        });

    
  }




    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px] rounded-[20px] ml-[43px] h-[347px] overflow-y-scroll'>
            <div className='flex items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>User List</h1>
                <HiOutlineDotsVertical className='ml-[201px]' />
            </div>

             {
                userList.map((user)=>

                       <div className='relative flex items-center mt-[29px]'>
                <div>
                    <img src={tejesh} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>{user.username}</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>{user.email}</p>
                </div>

                <div className='ml-[89px]'>
                    <FaSquarePlus onClick={() => handleFriendRequest(user)} className='text-[30px]' />
                </div>

               
            </div>
                )
             }
           
         
        </div>
    )
}

export default UserList