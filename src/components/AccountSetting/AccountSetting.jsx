import React from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";


const AccountSetting = () => {
  return (
    <div className='font-primary shadow p-5 mt-5 w-[700px] bg-[#141313] rounded-[20px]'>
      <h2 className='font-semibold text-[20px] text-white'>Account Settings</h2>

      <div className='ml-[40px] mt-[43px] text-white'>
        <div className='flex items-center gap-x-[36px]'>
          <FaKey className='text-[25px]' />
          <p className='text-[20px]'>Change Password</p>
        </div>
        <div className='flex items-center gap-x-[36px] mt-[10px]'>
          <RiDeleteBinFill className='text-[25px]' />
          <p className='text-[20px]'>Delete Account.</p>
        </div>
      </div>
      <div className='mt-[280px] text-center'>
        <p className='text-[20px] text-white'>Chat App</p>
      </div>
    </div>
  )
}

export default AccountSetting
