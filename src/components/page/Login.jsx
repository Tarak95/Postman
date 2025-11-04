import React, { useState } from 'react'
import login from "../../assets/login.png"
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from 'react-router';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../slices/userSlice';



const Login = () => {
    const dispatch = useDispatch()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [show, setShow] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError("")
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")

    }

    const handleLogin = () => {
        if (!email) {
            setEmailError("Mail is required")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("You have entered an invalid email address!")
            }
        }

        if (!password) {
            setPasswordError("Password is required")
        } else {
            if (!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)) {
                setPasswordError("The string must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character, at least one special character must be 6 characters or longer")
            }
        }

        if (email && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) && (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password))) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user, "login")

                    dispatch(userInfo(user.user))

                    localStorage.setItem("userInfo", JSON.stringify(user))

                    setTimeout(()=>{
                        navigate("/")
                    },2000)

                    toast.success("Login Successfully Done")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/invalid-credential") {
                        toast.error("Please provide right email and password")
                    }
                });
        }
    }


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((user) => {
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });

    }


    return (
        <div className=''>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />

            <div className='flex items-center'>
                <div className='w-[50%] flex justify-end'>

                    <div className='mr-[174px]'>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Login to your account!</h3>
                        <div onClick={handleGoogleSignIn} className='flex items-center border w-[228px] py-[22px] pl-[30px] border-[#808080] rounded-[8px] mt-[30px]'>
                            <FcGoogle />
                            <button className='ml-[10px] font-third text-[13px] font-semibold tracking-[2%] cursor-pointer'>Login with Google</button>

                        </div>
                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[-6px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                            <input onChange={handleEmail} value={email} className='py-[20px] pl-[0px] pr-[66px] w-full border-b-2 outline-0 border-[#808080]' type="email" placeholder='Enter Your Email Address' />

                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{emailError}</p>
                        </div>


                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[-6px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Password</p>
                            <input onChange={handlePassword} className='py-[20px] pl-[0px] pr-[66px] w-full border-b-2 border-[#808080] outline-0' type={show ? "text" : "password"} placeholder='Enter Your Password' />

                            <div className='absolute top-[40%] right-[5%]'>
                                {
                                    show ? <FaEye onClick={() => setShow(!show)} /> : <FaEyeSlash onClick={() => setShow(!show)} />

                                }

                            </div>

                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{passwordError}</p>

                        </div>

                        <div>
                            <button onClick={handleLogin} className='relative py-[20px] cursor-pointer bg-[#1E1E1E] pl-[122px] pr-[122px] text-white font-secondary text-[20px] font-semibold rounded-[9px] mt-[51px]'>Login to Continue
                                <span className='absolute top-[50%] left-[50%] bg-[#5B36F5]/30 h-[40px] w-[170px] blur-[10px] -translate-[50%]'></span>
                            </button>
                        </div>

                        <Link to="/forgotpassword">
                            <p className=' font-third text-[13px] text-[#EA6C00] text-center cursor-pointer mt-[10px]'>
                                Forgot Password
                            </p>
                        </Link>




                        <div className=' mt-[35px]'>
                            <p className=' font-third text-[13px] text-[#03014C]'>Don’t have an account ?
                                <Link to="/registration"><span className='font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></Link>
                            </p>
                        </div>

                    </div>

                </div>
                <div className='w-[50%]'>
                    <img className='h-screen w-full object-cover' src={login} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login