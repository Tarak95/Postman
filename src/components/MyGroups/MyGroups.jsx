import React from 'react'

import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"

const MyGroups = () => {
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px] rounded-[20px] ml-[28px] h-[347px] overflow-y-scroll'>
            <div className='flex items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>My Groups</h1>
                <HiOutlineDotsVertical className='ml-[189px]' />
            </div>

            <div className='relative flex items-center mt-[35px]'>
                <div>
                    <img src={raghav} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Raghav</p>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Dinner?</p>
                </div>

                <div className='ml-[81px]'>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                </div>

                <div className='absolute bottom-[-9px] left-0 h-[1px] w-[277px] bg-black/25 '></div>
            </div>





            <div className='relative flex items-center mt-[17px]'>
                <div className='relative'>
                    <img src={swathi} alt="" />
                    <div className='absolute top-[32px] left-[40px] h-[20px] w-[20px] bg-white rounded-[50%] border border-black'>
                        <div className='absolute top-[2px] left-[2px] h-[14px] w-[14px] bg-green-600 rounded-[50%]'></div>
                    </div>
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Swathi</p>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Sure!</p>
                </div>

                <div className='ml-[93px]'>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Today, 2:31pm</p>
                </div>

                <div className='absolute bottom-[-9px] left-0 h-[1px] w-[277px] bg-black/25 '></div>
            </div>









            <div className='relative flex items-center mt-[17px]'>
                <div>
                    <img src={kiran} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Kiran</p>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Hi.....</p>
                </div>

                <div className='ml-[80px]'>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Yesterday, 6:22pm</p>
                </div>

                <div className='absolute bottom-[-9px] left-0 h-[1px] w-[277px] bg-black/25 '></div>
            </div>










            <div className='relative flex items-center mt-[17px]'>
                <div>
                    <img src={tejesh} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[14px]'>Tejeshwini C</p>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>I will call him today.</p>
                </div>

                <div className='ml-[20px]'>
                    <p className='font-primary font-medium text-[12px] text-[#4D4D4D]/75'>Today, 12:22pm</p>
                </div>


            </div>










        </div>
    )
}

export default MyGroups