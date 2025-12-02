import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';

const MyGroups = () => {
    const db = getDatabase()

    const data = useSelector((selector) => (selector.userInfo?.value?.user))
    const [myGroup, setMyGroup] = useState([])

    useEffect(() => {
        const groupListRef = ref(db, "groupList")
        onValue(groupListRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (item.val().groupCreator == data.uid) {
                    arr.push(item.val())
                }
            })
            setMyGroup(arr)
        })

    }, [])
    console.log(myGroup)
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px] mt-9'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>My Groups</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>
                {
                    myGroup.map((item) => (
                        <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                            <div className='flex items-center'>
                                <img src={tejesh} alt="" />

                                <div className='ml-[14px]'>
                                    <h3 className='font-semibold font-primary text-[18px]'>{item.groupName}</h3>
                                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{item.groupTagline}</p>
                                </div>
                            </div>

                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default MyGroups