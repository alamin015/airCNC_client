import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { themeContext } from '../Firebase/AuthProvider'
import { toastifyError, toastifySuccess } from '../importantJS/toastify'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../Components/Spinner/Spinner';
import {FcGoogle} from "react-icons/fc"

const Login = () => {
    const {loader,signInUser,setLoader,googleSign} = useContext(themeContext);
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        setLoader(true)
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;

        signInUser(email,password)
        .then((credit) => {
            setLoader(false)
            navigate("/")
        })
        .catch(err => {
            setLoader(false)
            toastifyError("something went wrong");
        })

    }

    const handleGoogle = () => {
        googleSign()
        .then((result) => {
            setLoader(false)
            navigate("/")
        })
        .catch(err => {
            setLoader(false)
            toastifyError("Something went wrong!")
        })
    }


  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
        <Helmet>
            <title>AirCNC- Register</title>
        </Helmet>
        <form  onSubmit={handleSignIn}  className='w-full max-w-[400px] mx-auto'>
            <div className='mb-3'>
                <label htmlFor="email" className='block text-xl mb-1 font-medium'>Email:</label>
                <input type="email" id='email' name="email" className='border rounded-md p-2 outline-none w-full'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password" className='block text-xl mb-1 font-medium'>Password:</label>
                <input type="password" id='password' name="password" className='border rounded-md p-2 outline-none w-full'/>
            </div>
            <p className='text-base'>Are you new? <Link className='text-rose-500 hover:underline' to="/registration">Please Register</Link></p>
            <div className='text-center mt-10'>
                <button className='h-[45px] w-[170px] bg-rose-500 text-xl font-medium text-white rounded-sm'>{loader ? <Spinner /> : 'Sign in' }</button>
            </div>

        <div className='mt-4 flex gap-2 items-center justify-center'>
            <span className='h-[3px] grow bg-rose-500'></span>
            <span className='shrink-0 font-medium text-xl'>Or social login</span>
            <span className='h-[3px] grow bg-rose-500'></span>
        </div>
        <div onClick={handleGoogle} className='mt-4 flex-items-center justify-center border hover:bg-slate-100 rounded-md border-rose-500 py-3 px-2 cursor-pointer'>
            <div className='flex items-center justify-center gap-2'>
            <FcGoogle size={30} className='' />
            <p className='text-2xl font-medium'>Google</p>
            </div>
        </div>
        </form>
        
    </div>
  )
}

export default Login