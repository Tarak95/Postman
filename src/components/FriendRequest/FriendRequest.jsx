import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"

import { getDatabase, onValue, ref } from 'firebase/database';

const FriendRequest = () => {
  const db = getDatabase();
  const [friendRequestList, setFriendRequestList] = useState([]);

  useEffect(() => {
    const friendRequestListRef = ref(db, 'friendRequest');
    onValue(friendRequestListRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setFriendRequestList(arr);
    });
  }, []);

  console.log(friendRequestList);

  return (
    <div className='py-[13px] px-[20px] ml-[43px] h-[347px] overflow-y-scroll'>
      <div className='flex items-center'>
        <h1 className='font-primary font-semibold text-[20px]'>Friend Request</h1>
        <HiOutlineDotsVertical className='text-xl' />
      </div>

      {
        friendRequestList.map((friendRequest, index) => (
          <div
            key={index}
            className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'
          >
            <div className='flex items-center'>
              <img src={tejesh} alt="" />
              <div className='ml-[14px]'>
                <h3 className='font-semibold font-primary text-[18px]'>
                  {friendRequest.receiverName}
                </h3>
              </div>
            </div>

            <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>
              Accept
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default FriendRequest
