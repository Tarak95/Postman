import React, { useState } from 'react'
import register from "../../assets/register.png"
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

import { getDatabase, ref, set, update } from "firebase/database";

import { Circles } from 'react-loader-spinner'


const Registration = () => {

    const db = getDatabase();

    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")



    const [emailError, setEmailError] = useState("");
    const [fullNameError, setFullNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [show, setShow] = useState(false)

    const [loading, setLoading] = useState(false);



    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("")
    }




    const handleFullName = (e) => {
        setFullName(e.target.value)
        setFullNameError("")

    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")

    }

    const handleSignUp = () => {

        if (!email) {
            setEmailError("Email is required");
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("Please enter the correct email")
            }
        }

        if (!fullName) {
            setFullNameError("Fullname is required")
        }

        if (!password) {
            setPasswordError("Password is required")
        } else {
            if (!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)) {
                setPasswordError("The string must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character, at least one special character must be 6 characters or longer")

            }
            // if(!/(?=.*[a-z])/.test(password)){
            //     setPasswordError("The string must contain at least 1 lowercase alphabetical character")
            // } else if (!/(?=.*[A-Z])/.test(password)){
            //     setPasswordError("The string must contain at least 1 uppercase alphabetical character gg")
            // }


        }

        console.log(email, fullName, password)

        if (email && fullName && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) && (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password))) {
            setLoading(true);

            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    sendEmailVerification(auth.currentUser)
                    console.log(user, "User");

                    updateProfile(auth.currentUser,{
                        displayName:fullName,
                    })


                    toast.success("Registration Successfully done. Please Verify your email")
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000);

                    setEmail("")
                    setFullName("")
                    setPassword("")
                    // setLoading(false);

                    set(ref(db, 'users/' + user.user.uid), {
                  username: fullName,
                    email: email,
  });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // toast.error(errorCode)

                    if (errorCode === "auth/email-already-in-use") {
                        setEmailError("This email is already in used");
                    }

                    setLoading(false);
                    // ..
                });
        }



    }





    return (
        <div>
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
            // transition={Bounce}
            />
            <div className='flex items-center'>
                <div className='w-[50%] flex justify-end'>

                    <div className='mr-[70px]'>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Get started with easily register</h3>
                        <p className='font-secondary text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                            <input onChange={handleEmail} value={email} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="email" placeholder='Email Address' />
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{emailError}</p>
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Full name</p>
                            <input onChange={handleFullName} value={fullName} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="text" placeholder='Full name' />
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{fullNameError}</p>
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Password</p>
                            <input onChange={handlePassword} value={password} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type={show ? "text" : "password"} placeholder='Password' />

                            <div className='absolute top-[25px] right-[5%]'>
                                {
                                    show ? <FaEye onClick={() => setShow(!show)} /> : <FaEyeSlash onClick={() => setShow(!show)} />
                                }



                            </div>
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{passwordError}</p>
                        </div>

                        <div>
                            
                            {
                                loading ? <div className='ml-[30%]'><Circles
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    ariaLabel="circles-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                /></div> : (<button onClick={handleSignUp} className='relative py-[20px] bg-[#1E1E1E] pl-[150px] pr-[148px] text-white font-secondary cursor-pointer text-[20px] font-semibold rounded-[86px] mt-[51px]'>Sign up
                                    <span className='absolute top-[50%] left-[50%] bg-[#5B36F5]/30 h-[40px] w-[98px] blur-[10px] -translate-[50%]'></span>
                                </button>)
                            }




                            {/* <button onClick={handleSignUp} className='relative py-[20px] bg-[#1E1E1E] pl-[150px] pr-[148px] text-white font-secondary cursor-pointer text-[20px] font-semibold rounded-[86px] mt-[51px]'>Sign up
                                <span className='absolute top-[50%] left-[50%] bg-[#5B36F5]/30 h-[40px] w-[98px] blur-[10px] -translate-[50%]'></span>
                            </button> */}
                        </div>
                        <div className='w-[368px] mt-[35px]'>
                            <p className='text-center font-third text-[13px] text-[#03014C]'>Already  have an account ?
                                <Link to="/login"><span className='font-bold text-[#EA6C00] cursor-pointer'>Sign In</span></Link>

                            </p>
                        </div>






                    </div>

                </div>
                <div className='w-[50%]'>
                    <img className='h-screen w-full object-cover' src={register} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Registration