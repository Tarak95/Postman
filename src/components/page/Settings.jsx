import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SettingInfo from '../Settings/SettingInfo'



const Settings = () => {
    return (
        <div>
            <div className='flex m-[35px]'>
                <Sidebar active="Settings"/>
                <div className='w-[427px] ml-[43px]'>
                   <SettingInfo/>
                </div>

                <div className='w-[700px] ml-[43px]'>
                    
                </div>
            </div>
        </div>
    )
}

export default Settings
