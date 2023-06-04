import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';


const Register = () => {
    const [loader,setLoader] = useState(true);

    // const handleLoader = (e) => {
    //     e.preventDefault();
    //     setLoader(!loader)
    // }
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
        <form className='w-full max-w-[400px] mx-auto'>
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
            <div className='mb-3'>
                <label htmlFor="image" className='block text-xl mb-1 font-medium border-2 border-dashed py-3 text-center cursor-pointer'>Upload Your Photo</label>
                <input type="file" id='image' name="image" className='border rounded-md p-2 outline-none w-full hidden'/>
            </div>
            <div className='text-center mt-10'>
                <button className='h-[45px] w-[170px] bg-rose-500 text-xl font-medium text-white rounded-sm'>{loader ? <Spinner /> : 'Register' }</button>
                
            </div>
        </form>
    </div>
  )
}

export default Register