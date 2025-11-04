import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import friendsreunion from "../../assets/friendsreunion.png"
import friendsforever from "../../assets/friendsforever.png"
import crazycousins from "../../assets/crazycousins.png"

const GroupsList = () => {
  return (
    <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px] rounded-[20px] ml-[43px] h-[347px] overflow-y-scroll'>
        <div className='flex items-center'>
            <h1 className='font-primary font-semibold text-[20px]'>Groups List</h1>
            <HiOutlineDotsVertical className='ml-[268px]' />
        </div>

        <div className='relative flex items-center mt-[17px]'>
            <div>
                <img src={friendsreunion} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Friends Reunion</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
            </div>

            <div className='ml-[50px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

            <div className='absolute bottom-[-15px] left-0 h-[1px] w-[371px] bg-black/25'></div>
        </div>







        <div className='relative flex items-center mt-[28px]'>
            <div>
                <img src={friendsforever} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Friends Forever</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Good to see you.</p>
            </div>

            <div className='ml-[59px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

            <div className='absolute bottom-[-15px] left-0 h-[1px] w-[371px] bg-black/25'></div>
        </div>






        <div className='relative flex items-center mt-[28px]'>
            <div>
                <img src={crazycousins} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Crazy Cousins</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>What plans today?</p>
            </div>

            <div className='ml-[67px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

        </div>
        <div className='relative flex items-center mt-[28px]'>
            <div>
                <img src={crazycousins} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Crazy Cousins</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>What plans today?</p>
            </div>

            <div className='ml-[67px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

        </div>
        <div className='relative flex items-center mt-[28px]'>
            <div>
                <img src={crazycousins} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Crazy Cousins</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>What plans today?</p>
            </div>

            <div className='ml-[67px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

        </div>
        <div className='relative flex items-center mt-[28px]'>
            <div>
                <img src={crazycousins} alt="" />
            </div>

            <div className='ml-[14px]'>
                <p className='font-primary font-semibold text-[18px]'>Crazy Cousins</p>
                <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>What plans today?</p>
            </div>

            <div className='ml-[67px]'>
                <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[22px] rounded-[5px] cursor-pointer'>Join</button>
            </div>

        </div>


    </div>
  )
}

export default GroupsList