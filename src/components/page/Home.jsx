import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const auth = getAuth();

    const navigate = useNavigate()


    const data = useSelector(state => (state.userInfo.value))


    const [verify, setVerify] = useState(false)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!data) {
            navigate("/login")
        }
    })

    onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
            setVerify(true)
        }
        setLoading(false)
    });


    if (loading) {
        return null
    }
   

    return (
        <div>
            {
                verify ?
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                    :
                    
                          <div className='bg-black w-full h-screen flex justify-center items-center font-primary text-center'>
                        <div>
                            <p className='text-4xl text-[#FF1F35] font-bold py-10'>Please verify your email</p>


                            <Link to="/login" className='py-[10px] cursor-pointer bg-[#31EDAE] pl-[10px] pr-[10px] text-black font-secondary text-[16px] font-semibold rounded-[9px] mt-[10px]'>Go Back to Login

                            </Link>

                        </div>
                    </div>
               
            }
        </div>
    )
}

export default Home