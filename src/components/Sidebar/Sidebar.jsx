import React from 'react'
import profilepic from "../../assets/profilepic.png"
import { GoHome } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import { VscAccount } from "react-icons/vsc";




import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../slices/userSlice';




const Sidebar = ({ active }) => {
    const data = useSelector((selector) => (selector?.userInfo?.value))
    console.log(data);

    const auth = getAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // localStorage.clear();
                localStorage.removeItem("userInfo")
                dispatch(userInfo(null))

                setTimeout(() => {
                    navigate("/login");
                }, 2000)


            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    }




    return (
        <>
            <div className='bg-[#1E1E1E] font-primary text-white w-[186px]  rounded-[20px] relative'>
                <div className='flex justify-center pt-[38px]'>
                    <img src={profilepic} alt="" />
                </div>

                <div className='flex justify-center mt-2 text-xl font-bold'>
                    <p>{data?.displayName || data?.user?.displayName}</p>
                </div>

                <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "home" ? "after:bg-[#40DED1]" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[78px] py-[20px] cursor-pointer`}>
                    
                    <Link to="/Portfolio">
                    <VscAccount className={`text-5xl ${active == "home" ? "text-[#1E1E1E]" : "text-white"} `} />
                    </Link>

                </div>

                <div>
                    <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "home" ? "after:bg-white" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[78px] py-[20px] cursor-pointer`}>

                        <Link to="/">
                            <GoHome className={`text-5xl ${active == "home" ? "text-[#1E1E1E]" : "text-white"} `} />
                        </Link>

                    </div>
                </div>


                <div>
                    <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "message" ? "after:bg-white" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[78px] py-[20px] cursor-pointer`}>

                        <Link to="/msg">
                            <AiFillMessage className={`text-5xl ${active == "message" ? "text-[#1E1E1E]" : "text-white"} `} />
                        </Link>

                    </div>
                </div>

                <div>
                    <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "settings" ? "after:bg-white" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[78px] py-[20px] cursor-pointer`}>

                        <Link to="/settings">
                            <IoSettingsOutline className={`text-5xl ${active == "settings" ? "text-[#1E1E1E]" : "text-white"} `} />
                        </Link>

                    </div>
                </div>

                <div className='flex justify-center mt-[334px] pb-[47px] py-5   '>

                    <ImExit onClick={handleSignOut} className='text-5xl text-white cursor-pointer' />

                </div>

            </div>



        </>
    )
}

export default Sidebar