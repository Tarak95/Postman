import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { useSelector } from 'react-redux';

const BlockedUsers = () => {

    const db = getDatabase()
    const data = useSelector((selector) => (selector.userInfo?.value?.user))
    const [blockList, setBlockList] = useState([])

    useEffect(() => {
        const blockRef = ref(db, "block")
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (data?.uid == item.val().receiverId || data?.uid == item.val().senderId) {
                    arr.push({ ...item.val(), blockedId: item.key })
                }
            })
            setBlockList(arr)
        })
    }, [])


    const handleUnblocked = (item) => {
        remove(ref(db, "block/" + item.blockedId))
    }




    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px] mt-9'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Blocked Users</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>


                {
                    blockList.map((item) => (
                        <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                            <div className='flex items-center'>
                                <img src={raghav} alt="" />

                                <div className='ml-[14px]'>
                                    <h3 className='font-semibold font-primary text-[18px]'>
                                        {
                                            data?.uid == item.senderId ? item.receiverName : item.senderName
                                        }
                                    </h3>
                                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                                </div>
                            </div>

                            <button onClick={() => handleUnblocked(item)} className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                        </div>

                    ))
                }






                {/* <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={raghav} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Raghav</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                </div> */}


                {/* <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={swathi} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Swathi</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 2:31pm</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={kiran} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Kiran</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Yesterday, 6:22pm</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                </div>

                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={tejesh} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Tejeshwini C</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 12:22pm</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={marvin} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Marvin </h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>unblock</button>

                </div> */}
            </div>
        </div>
    )
}

export default BlockedUsers