import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { FaSquarePlus } from "react-icons/fa6";


const UserList = () => {
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px] rounded-[20px] ml-[43px] h-[347px] overflow-y-scroll'>
            <div className='flex items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>User List</h1>
                <HiOutlineDotsVertical className='ml-[201px]' />
            </div>

            <div className='relative flex items-center mt-[29px]'>
                <div>
                    <img src={raghav} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Raghav</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                </div>

                <div className='ml-[89px]'>
                    <FaSquarePlus className='text-[30px]' />
                </div>

                <div className='absolute bottom-[-10px] left-0 h-[1px] w-[277px] bg-black/25'></div>
            </div>




            <div className='relative flex items-center mt-[25px]'>
                <div>
                    <img src={swathi} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Swathi</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>Today, 2:31pm</p>
                </div>

                <div className='ml-[92px]'>
                    <FaSquarePlus className='text-[30px]' />
                </div>

                <div className='absolute bottom-[-10px] left-0 h-[1px] w-[277px] bg-black/25'></div>
            </div>




            <div className='relative flex items-center mt-[25px]'>
                <div>
                    <img src={kiran} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Kiran</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>Yesterday, 6:22pm</p>
                </div>

                <div className='ml-[71px]'>
                    <FaSquarePlus className='text-[30px]' />
                </div>

                <div className='absolute bottom-[-10px] left-0 h-[1px] w-[277px] bg-black/25'></div>
            </div>



            <div className='relative flex items-center mt-[25px]'>
                <div>
                    <img src={tejesh} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Tejeshwini C</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>Today, 12:22pm</p>
                </div>

                <div className='ml-[75px]'>
                    <FaSquarePlus className='text-[30px]' />
                </div>

                <div className='absolute bottom-[-10px] left-0 h-[1px] w-[277px] bg-black/25'></div>
            </div>





            <div className='relative flex items-center mt-[25px]'>
                <div>
                    <img src={marvin} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Marvin McKinney</p>
                    <p className='font-primary font-medium text-[10px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                </div>

                <div className='ml-[41px]'>
                    <FaSquarePlus className='text-[30px]' />
                </div>

            </div>









        </div>
    )
}

export default UserList