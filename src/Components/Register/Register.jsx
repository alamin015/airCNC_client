import React, { useContext, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { Helmet } from 'react-helmet-async';
import { themeContext } from '../../Firebase/AuthProvider';
import { toastifyError, toastifySuccess } from '../../importantJS/toastify';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"


const Register = () => {
    const [photoName,setPhotoName] = useState("Upload Your Photo")
    const {createUser,loader,setLoader,updateUser,googleSign} = useContext(themeContext)

    const navigate = useNavigate();
    const handleSign = (e) => {
        e.preventDefault();
        setLoader(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.files[0];
        const formData = new FormData();
        formData.append('image',image)
        
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
        fetch(url,{
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            const photoURL = result.data.display_url;
            createUser(email,password)
            .then(userCredit => {
                updateUser(name,photoURL)
                .then(() => {
                    setPhotoName("Upload Your Photo")
                    e.target.reset();
                    toastifySuccess("success");
                    navigate("/")
                })
                .catch(err => {
                    console.log(err.message)
                })
            })
            .catch(err => {
                console.log(err.message)
            })
        })
        
    }


    const handlePhoto = (e) => {
        setPhotoName(e.target.files[0].name)
    }

    // handle google sign in 
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
        <form  onSubmit={handleSign}  className='w-full max-w-[400px] mx-auto'>
            <div className='mb-3'>
                <label htmlFor="name" className='block text-xl mb-1 font-medium'>Name:</label>
                <input type="text" id='name' name="name" className='border rounded-md p-2 outline-none w-full'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="email" className='block text-xl mb-1 font-medium'>Email:</label>
                <input type="email" id='email' name="email" className='border rounded-md p-2 outline-none w-full'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password" className='block text-xl mb-1 font-medium'>Password:</label>
                <input type="password" id='password' name="password" className='border rounded-md p-2 outline-none w-full'/>
            </div>
            <div onChange={handlePhoto} className='mb-3'>
                <label htmlFor="image" className='block text-xl mb-1 font-medium border-2 border-dashed py-3 text-center cursor-pointer'>{photoName}</label>
                <input onChange={handlePhoto} accept='image/*'  type="file" id='image' name="image" className='border rounded-md p-2 outline-none w-full hidden'/>
            </div>
            <p className='text-base'>Already have an account? <Link className='text-rose-500 hover:underline' to="/login">Please Login</Link></p>
            <div className='text-center mt-10'>
                <button className='h-[45px] w-[170px] bg-rose-500 text-xl font-medium text-white rounded-sm'>{loader ? <Spinner /> : 'Register' }</button>
            </div>

            {/* social login  */}
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

export default Register