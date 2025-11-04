import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react'
import { Link } from 'react-router'

const ForgotPassword = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError("")
    }

    const handleResetPassword = () => {
        console.log("ok cool")
        if (!email) {
            setEmailError("Mail is required")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("You have entered an invalid email address!")
            }
        }

        if (email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            sendPasswordResetEmail(auth, email)
                .then((user) => {
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        }




    }


    return (
        <div className='w-full h-screen bg-black text-black flex justify-center items-center font-primary'>
            <div className='bg-white py-10 px-20 w-[700px] rounded-lg'>
                <h2 className='text-2xl font-bold'>Forgot Password</h2>

                <div>
                    <div className='relative w-[400px] mt-[60px]'>
                        <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                        <input onChange={handleEmail} value={email} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="email" placeholder='Email Address' />
                        <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{emailError}</p>
                    </div>
                </div>

                <button onClick={handleResetPassword} className='relative py-[10px] cursor-pointer bg-[#1E1E1E] pl-[10px] pr-[10px] text-white font-secondary text-[16px] font-semibold rounded-[9px] mt-[10px]'>Reset Password

                </button>

                <Link to="/login"  className='relative py-[10px] ml-5 cursor-pointer bg-[#1E1E1E] pl-[10px] pr-[10px] text-white font-secondary text-[16px] font-semibold rounded-[9px] mt-[10px]'>Go Back

                </Link>
            </div>
        </div>
    )
}

export default ForgotPassword