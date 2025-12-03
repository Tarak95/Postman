import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import friendsreunion from "../../assets/friendsreunion.png"
import friendsforever from "../../assets/friendsforever.png"
import crazycousins from "../../assets/crazycousins.png"
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';


const GroupsList = () => {

    const db = getDatabase()
    const data = useSelector((selector) => (selector.userInfo?.value?.user))

    const [groupNameError, setGroupNameError] = useState("")
    const [groupTaglineError, setGroupTaglineError] = useState("")

    const [groupName, setGroupName] = useState("");
    const [groupTagline, setGroupTagline] = useState("");

    const [groupList, setGroupList] = useState([])

    const [show, setShow] = useState(false)
    const handleToggle = () => {
        setShow(!show)
    }




    const handleCreateGroup = () => {


        // console.log(groupName)
        // console.log(groupTagline)
        // if(!groupName){
        //     console.log("group name please")
        // }
        // if(!groupTagline){
        //     console.log("tagline please")
        // }



        console.log(groupName)
        console.log(groupTagline)
        if (!groupName) {
            setGroupNameError("Group Name Please")
        } 

        if (!groupTagline) {
            setGroupTaglineError("Tagline please")
        } 


        
        
        if (groupName && groupTagline) {
            set(push(ref(db, "groupList/")), {
                groupName: groupName,
                groupTagline: groupTagline,
                groupCreator: data.uid
            })
           

            setShow(false)
            setGroupName("")
            setGroupTagline("")

        }
    }


    useEffect(() => {
        const groupListRef = ref(db, "groupList")
        onValue(groupListRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (item.val().groupCreator != data.uid) {
                    arr.push(item.val())
                }
            })
            setGroupList(arr)
        })

    }, [])
    console.log(groupList)


    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Groups List</h1>
             
                <div>
                    {
                        show ?
                            <button onClick={handleToggle} className='bg-pink-700 text-white rounded-[7px] font-bold cursor-pointer px-2 py-1'>Go Back</button>
                            :
                            <button onClick={handleToggle} className='bg-black text-white rounded-[7px] font-bold cursor-pointer px-2 py-1'>Create Group</button>
                    }

                </div>
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>
                {
                    show ?
                        <div className='pt-10 absolute left-[40%] top-[15%] bg-[#95F527] h-[300px] w-[500px] rounded-3xl'>
                            <div className='p-3'>
                                <input onChange={(e) => {setGroupName(e.target.value), setGroupNameError("")} } className='border-2 px-2 py-2 w-full rounded-md' type="text" placeholder='Group Name' />
                                <p className='bg-red-600 px-2 rounded text-black text-[14px] mt-2'>{groupNameError}</p>
                                <input onChange={(e) => {setGroupTagline(e.target.value), setGroupTaglineError("")}} className='border-2 px-2 py-2 w-full rounded-md my-5' type="text" placeholder='Group Tagline' />
                                <p className='bg-red-500 px-2 rounded text-black text-[14px] mb-3'>{groupTaglineError}</p>
                                <button onClick={handleCreateGroup} className='bg-black text-white rounded-[7px] font-bold cursor-pointer px-2 py-2 w-full'>Create</button>
                            </div>
                        </div>
                        :
                        <div>
                            {
                                groupList.map((item) => (
                                    <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                                        <div className='flex items-center'>
                                            <img src={friendsreunion} alt="" />

                                            <div className='ml-[14px]'>
                                                <h3 className='font-semibold font-primary text-[18px]'>{item.groupName}</h3>
                                                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{item.groupTagline}</p>
                                            </div>
                                        </div>

                                        <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                                    </div>
                                ))

                            }
                        </div>



                }







            </div>
        </div>
    )
}

export default GroupsList