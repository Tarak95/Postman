import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"

const FriendRequest = () => {
    return (
        <div className=' py-[13px] px-[20px]  ml-[43px] h-[347px] overflow-y-scroll'>
            <div className='flex items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Friend Request</h1>
                <HiOutlineDotsVertical className='ml-[220px]' />
            </div>

            <div className='relative flex items-center mt-[17px]'>
                <div>
                    <img src={raghav} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[18px]'>Raghav</p>
                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Dinner?</p>
                </div>

                <div className='ml-[104px]'>
                    <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[8px] rounded-[5px] cursor-pointer'>Accept</button>
                </div>

                <div className='absolute bottom-[-15px] left-0 h-[1px] w-[371px] bg-black/25'></div>
            </div>







            <div className='relative flex items-center mt-[28px]'>
                <div>
                    <img src={swathi} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[18px]'>Swathi</p>
                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Sure!</p>
                </div>

                <div className='ml-[112px]'>
                    <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[8px] rounded-[5px] cursor-pointer'>Accept</button>
                </div>

                <div className='absolute bottom-[-15px] left-0 h-[1px] w-[371px] bg-black/25'></div>
            </div>









            <div className='relative flex items-center mt-[28px]'>
                <div>
                    <img src={kiran} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[18px]'>Kiran</p>
                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi.....</p>
                </div>

                <div className='ml-[126px]'>
                    <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[8px] rounded-[5px] cursor-pointer'>Accept</button>
                </div>

                <div className='absolute bottom-[-15px] left-0 h-[1px] w-[371px] bg-black/25'></div>

            </div>





            <div className='relative flex items-center mt-[28px]'>
                <div>
                    <img src={tejesh} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[18px]'>Tejeshwini C</p>
                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>I will call him today.</p>
                </div>

                <div className='ml-[39px]'>
                    <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[8px] rounded-[5px] cursor-pointer'>Accept</button>
                </div>

                

            </div>
            <div className='relative flex items-center mt-[28px]'>
                <div>
                    <img src={tejesh} alt="" />
                </div>

                <div className='ml-[14px]'>
                    <p className='font-primary font-semibold text-[18px]'>Tejeshwini C</p>
                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>I will call him today.</p>
                </div>

                <div className='ml-[39px]'>
                    <button className='font-primary font-semibold text-[20px] text-white bg-[#1E1E1E] px-[8px] rounded-[5px] cursor-pointer'>Accept</button>
                </div>

                

            </div>


        </div>
    )
}

export default FriendRequest