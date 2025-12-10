import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SettingInfo from '../Settings/SettingInfo'
import AccountSetting from '../AccountSetting/AccountSetting'



const Settings = () => {
    return (
        <div>
            <div className='flex m-[35px]'>
                <Sidebar active="Settings"/>
                <div className='w-[700px] ml-[43px] pt-[10px]'>
                   <SettingInfo/>
                </div>

                <div className='w-[700px] ml-[43px] pt-[10px]'>
                    <AccountSetting/>
                </div>
            </div>
        </div>
    )
}

export default Settings
