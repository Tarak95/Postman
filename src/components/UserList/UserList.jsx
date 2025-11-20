import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

import { MdAddBox } from "react-icons/md";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';


const UserList = () => {

     const data = useSelector((selector) => (selector?.userInfo?.value?.user))
     


      const db = getDatabase();
      const [userList, setUserList] = useState([]); 

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data?.uid !== item.key)
        arr.push({...item.val(), userid: item.key});
      });
      setUserList(arr);
    });
  }, []);
  console.log(userList);


     const handleFriendRequest = (item) => {
        console.log( item)
       set(push(ref(db,'friendRequest/')), {
       senderName: data.displayName,
       senderId: data?.uid,
       receiverName: item.username,
       receiverId: item.userid
});


    
  }

  const [friendRequestList, setFriendRequestList] = useState([])
  useEffect(() =>{
    const friendRequestRef = ref(db, "friendRequest")
    onValue(friendRequestRef, (snapshot)=>{
        let arr = []
        snapshot.forEach((item) => {
            arr.push(item.val().receiverId + item.val().senderId)
        })
        setFriendRequestList(arr)
    })
  }, [])


 const [friendList, setFriendList] = useState([]);

useEffect(() => {
    const friendRef = ref(db, "friend");
    onValue(friendRef, (snapshot) => {
        let arr = [];
        snapshot.forEach((item) => {
            arr.push(item.val().receiverId + item.val().senderId);
        });
        setFriendList(arr);
    });
}, []);





    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>User List</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>

                {
                    userList.map((user) => (
                        <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                            <div className='flex items-center'>
                                <img src={kiran} alt="" />

                                <div className='ml-[14px]'>
                                    <h3 className='font-semibold font-primary text-[18px]'>{user.username}</h3>
                                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{user.email}</p>
                                </div>
                            </div>

                            {
                                friendList.includes(data?.uid + user.userid) ||
                                    friendList.includes(user.userid + data?.uid) ? (
                                    <p className='text-green-600 font-semibold font-primary'>Friend</p>

                                )
                                    :
                                    friendRequestList.includes(data?.uid + user.userid) ||
                                        friendRequestList.includes(user.userid + data?.uid)
                                        ?
                                        <FaSquareMinus className='text-[30px]' />
                                        :
                                        <FaSquarePlus onClick={() => handleFriendRequest(user)} className='text-[30px]' />


                            }



                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default UserList