import React, { useEffect, useState } from 'react'

import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"

import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';


const UserList = () => {
    const data = useSelector((selector) => (selector.userInfo?.value?.user))

    const db = getDatabase();
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const userRef = ref(db, "users")
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (data?.uid !== item.key) {
                    arr.push({ ...item?.val(), userid: item.key })

                }

            })
            setUserList(arr)
        })
    }, [])

    const handleFriendRequest = (item) => {
        console.log("ok", item)
        set(push(ref(db, 'friendRequest/')), {
            senderName: data.displayName,
            senderId: data?.uid,
            receiverName: item.username,
            receiverId: item.userid
        });
    }



    const [friendRequestList, setFriendRequestList] = useState([])
    useEffect(() => {
        const friendRequestRef = ref(db, "friendRequest")
        onValue(friendRequestRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val().receiverId + item.val().senderId)

            })
            setFriendRequestList(arr)
        })

    }, [])



    const [friendList, setFriendList] = useState([])
    useEffect(() => {
        const friendRef = ref(db, "friend")
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receiverId + item.val().senderId)

            })
            setFriendList(arr)
        })

    }, [])


    const [blockList, setBlockList] = useState([]);
    useEffect(() => {
        const blockRef = ref(db, "block");
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receiverId + item.val().senderId);
            })
            setBlockList(arr)
        })
    }, [])




    const [filterUserList, setFilterUserList] = useState([])
    const handleSearch = (e) => {
        let arr = []
        if (e.target.value.length == 0) {
            setFilterUserList([])
        } else {
            userList.filter((item) => {
                if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
                    arr.push(item)
                    setFilterUserList(arr)
                }
            })
        }
    }



    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>User List</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div>
                <input
                    onChange={handleSearch} type="text"
                    className='border py-[5px] px-[10px] w-[350px]' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>

                {
                    filterUserList.length > 0 ?

                        filterUserList.map((user) => (
                            <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                                <div className='flex items-center'>
                                    <img src={tejesh} alt="" />

                                    <div className='ml-[14px]'>
                                        <h3 className='font-semibold font-primary text-[18px]'>{user.username}</h3>
                                        <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{user.email}</p>
                                    </div>
                                </div>

                                {
                                    blockList.includes(data?.uid + user.userid) ||
                                        blockList.includes(user.userid + data?.uid) ? (
                                        <p className='text-red-600 font-semibold font-primary'>BLOCKED</p>
                                    )
                                        :


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

                        :


                        userList.map((user) => (
                            <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                                <div className='flex items-center'>
                                    <img src={tejesh} alt="" />

                                    <div className='ml-[14px]'>
                                        <h3 className='font-semibold font-primary text-[18px]'>{user.username}</h3>
                                        <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{user.email}</p>
                                    </div>
                                </div>

                                {
                                    blockList.includes(data?.uid + user.userid) ||
                                        blockList.includes(user.userid + data?.uid) ? (
                                        <p className='text-red-600 font-semibold font-primary'>BLOCKED</p>
                                    )
                                        :


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