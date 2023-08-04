import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setisLoggedIn}) => {
    const [formdata, setFormdata] = useState(
        {email : "",
        password : ""}
    )
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormdata((prev) => (
            {...prev , 
                [event.target.name] : event.target.value
            }))
    }

    function submitHandler(event){
        event.preventDefault();
        setisLoggedIn(true);
        toast.success('Logged In')
        navigate('/dashboard');
        const finalData = { ...formdata}
        console.log(finalData)
    }

  return (
    <div>
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address 
                    <sup className=' text-pink-200 '>*</sup>
                </p> 
                <input
                    required
                    type='email'
                    name='email'
                    value={formdata.email}
                    placeholder='Enter your Email'
                    onChange={changeHandler}
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label  className='w-full relative '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password <sup className=' text-pink-200 '>*</sup>
                </p>
                

                <input 
                    required 
                    type={showPassword ? ('text') : ('password')}
                    name='password'
                    value={formdata.password}
                    placeholder='Enter your Password'
                    onChange={changeHandler}
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <div className=' absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </div>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>  
                </Link>
            </label>

            <button className='  bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
                Sign In
            </button>

        </form>
    </div>
  )
}

export default LoginForm