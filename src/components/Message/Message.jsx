import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Friends from '../Friends/Friends'
import ChatBox from '../ChatBox/ChatBox'

const Message = () => {
    return (
        <div>
            <div className='flex m-[35px]'>
                <Sidebar active="message"/>
                <div className='w-[427px] ml-[43px]'>
                    <Friends/>
                </div>

                <div className='w-[700px] ml-[43px]'>
                    <ChatBox/>
                </div>

                

            </div>

        </div>
    )
}

export default Message