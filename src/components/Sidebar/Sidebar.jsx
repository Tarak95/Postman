// Firebase theke signOut function niya hoyese
import { getAuth, signOut } from "firebase/auth";

// Redux theke useSelector & useDispatch niya hoyese
import { useSelector, useDispatch } from 'react-redux';

import React from 'react';
import profilepic from "../../assets/profilepic.png";
import { GoHome } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from 'react-router';
import { userInfo } from '../../slices/userSlice';


const Sidebar = ({ active }) => {

 
    const data = useSelector((selector) => selector?.userInfo?.value);
    
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Logout function
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

                // localStorage theke user info delete

                localStorage.removeItem("userInfo");
                dispatch(userInfo(null));

                // Login page e pathano

                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };


    return (
        <>
            <div className='bg-[#1E1E1E] font-primary text-white w-[186px] h-screen rounded-[20px] relative'>

            
                <div className='flex justify-center pt-[38px]'>
                    <img src={profilepic} alt="profile" />
                </div>

              
                <div className='flex justify-center mt-2 text-xl font-bold'>
                    <p>{data?.displayName || data?.user?.displayName}</p>
                </div>


                <div>
                    <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full 
                        ${active == "home" ? "after:bg-white" : "after:bg-transparent"}  
                        after:z-[-1] z-1 after:ml-[20px] after:rounded-lg 
                        before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] 
                        before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      
                        flex justify-center mt-[78px] py-[20px] cursor-pointer`}
                    >
                        <Link to="/">
                            <GoHome className={`text-5xl ${active == "home" ? "text-[#1E1E1E]" : "text-white"}`} />
                        </Link>
                    </div>
                </div>


                
                <div>
                    <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full 
                        ${active == "message" ? "after:bg-white" : "after:bg-transparent"}  
                        after:z-[-1] z-1 after:ml-[20px] after:rounded-lg 
                        before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] 
                        before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      
                        flex justify-center mt-[78px] py-[20px] cursor-pointer`}
                    >
                        <Link to="/msg">
                            <AiFillMessage className={`text-5xl ${active == "message" ? "text-[#1E1E1E]" : "text-white"}`} />
                        </Link>
                    </div>
                </div>


              
                <div>
                    <div className='flex justify-center mt-[57px] cursor-pointer'>
                        <IoSettingsOutline className='text-5xl text-[#C3C3C3]' />
                    </div>
                </div>


                
                <div className='absolute left-[50%] translate-x-[-50%] bottom-[48px]'>
                    <ImExit onClick={handleSignOut} className='text-5xl text-white cursor-pointer' />
                </div>

            </div>
        </>
    );
};

export default Sidebar;
