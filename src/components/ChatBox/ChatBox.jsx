import React, { useEffect, useState } from 'react'
import tejesh from "../../assets/tejesh.png"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbTriangleFilled } from "react-icons/tb";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import moment from "moment"
import EmojiPicker from 'emoji-picker-react';

const ChatBox = () => {

    const db = getDatabase();
    const data = useSelector((state) => state.userInfo?.value?.user);
    const activeData = useSelector((state) => state.activeChatInfo.value);

    const [msg, setMsg] = useState("");
    const [msgList, setMsgList] = useState([]);
    const [showEmoji, setShowEmoji] = useState(false);

    const handleMsg = () => {
        if (!msg.trim()) return;

        set(push(ref(db, "msg")), {
            senderId: data.uid,
            senderName: data.displayName,
            receiverId: activeData.id,
            receiverName: activeData.name,
            message: msg,
            date: moment().format()
        });

        setMsg("");
    };

    useEffect(() => {
        const messageRef = ref(db, "msg");
        onValue(messageRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (
                    (data.uid === item.val().senderId && activeData.id === item.val().receiverId)
                    ||
                    (data.uid === item.val().receiverId && activeData.id === item.val().senderId)
                ) {
                    arr.push(item.val());
                }
            });
            setMsgList(arr);
        });
    }, [activeData?.id]);

    const handleEmoji = (emoji) => {
        setMsg(msg + emoji.emoji);
    };

    return (
        <div className='
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
            font-primary px-[50px] py-[25px] rounded-[20px]
            bg-white dark:bg-[#1a1a1a]
            text-black dark:text-white
        '>

            {/* Header */}
            <div className='flex justify-between items-center border-b border-black/25 dark:border-white/20 pb-[30px]'>
                <div className='flex items-center gap-x-[33px]'>
                    <img src={tejesh} alt="" />
                    <div>
                        <h2 className='font-semibold text-[24px]'>
                            {activeData ? activeData.name : "Unknown"}
                        </h2>
                        <p className='text-gray-500 dark:text-gray-400'>Online</p>
                    </div>
                </div>

                <HiOutlineDotsVertical className='text-2xl cursor-pointer' />
            </div>

            {/* Messages */}
            <div className='py-[56px] border-b border-black/25 dark:border-white/20 overflow-y-auto max-h-[500px]'>

                {msgList.map((item, index) => (
                    data.uid === item.senderId ? (

                        <div key={index} className='my-2 text-end'>
                            <div className='relative inline-block'>
                                <p className='
                                    py-[13px] px-[52px]
                                    bg-[#ba1065] text-white
                                    dark:bg-[#d94693]
                                    font-medium rounded-[10px]
                                '>
                                    {item.message}
                                </p>
                                <div className='absolute bottom-[-3px] right-[-10px]'>
                                    <TbTriangleFilled className='text-[#ba1065] dark:text-[#d94693] text-2xl' />
                                </div>
                            </div>
                            <p className='text-[12px] font-medium text-gray-400 mt-2'>
                                {moment(item.date).fromNow()}
                            </p>
                        </div>

                    ) : (

                        <div key={index} className='my-2'>
                            <div className='relative inline-block'>
                                <p className='
                                    py-[13px] px-[52px]
                                    bg-[#ba1065] text-white
                                    dark:bg-[#d94693]
                                    font-medium rounded-[10px]
                                '>
                                    {item.message}
                                </p>
                                <div className='absolute bottom-[-3px] left-[-10px]'>
                                    <TbTriangleFilled className='text-[#ba1065] dark:text-[#d94693] text-2xl' />
                                </div>
                            </div>
                            <p className='text-[12px] font-medium text-gray-400 mt-2'>
                                {moment(item.date).fromNow()}
                            </p>
                        </div>

                    )
                ))}

                {/* Emoji Picker */}
                {showEmoji && (
                    <div className='absolute z-50 top-[200px] left-[140px]'>
                        <EmojiPicker onEmojiClick={handleEmoji} />
                    </div>
                )}

            </div>

            {/* Input Section */}
            <div className='flex space-x-3 mt-[10px] items-center'>
                <div className='relative'>
                    <input
                        onChange={(e) => setMsg(e.target.value)}
                        value={msg}
                        type="text"
                        placeholder='Message'
                        onKeyDown={(e) => e.key === "Enter" && handleMsg()}
                        className='
                            w-[543px] pr-[200px] pl-[10px]
                            bg-[#F1F1F1] dark:bg-[#333]
                            text-black dark:text-white
                            py-[13px] rounded-[10px]
                        '
                    />
                    <div className='flex absolute top-[15px] right-[12px] space-x-[13px]'>
                        <MdOutlineEmojiEmotions
                            onClick={() => setShowEmoji(!showEmoji)}
                            className='text-[20px] text-[#707070] dark:text-gray-300 cursor-pointer'
                        />
                        <CiCamera className='text-[22px] dark:text-white cursor-pointer' />
                    </div>
                </div>

                <div
                    onClick={handleMsg}
                    className='bg-[#1E1E1E] dark:bg-[#444] p-[15px] rounded-[10px] cursor-pointer'
                >
                    <FaTelegramPlane className='text-white' />
                </div>
            </div>

        </div>
    )
}

export default ChatBox;
