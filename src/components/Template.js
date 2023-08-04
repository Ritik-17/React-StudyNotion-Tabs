import React from 'react'
import frameimage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'


const Template = ({title, desc1, desc2, formtype, image, setisLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between '>
        
        <div className='w-11/12 max-w-[450px] mx-0'>
        {/* Title - description */}
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] '>
                {title}
            </h1>
            <p className='text-[1.275rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100' >{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {/* Forms */}
            <div>{formtype === "signup" ? 
            (<SignupForm setisLoggedIn = {setisLoggedIn} />) : (<LoginForm setisLoggedIn = {setisLoggedIn} />)}</div>

            {/* -OR-line */}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700  '></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]' >OR</p>
                <div className='w-full h-[1px] bg-richblack-700  '></div>
            </div>

            {/* Google Sign in button */}
            <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign in with Google</p> 
            </button>
        </div>

        {/* Images */}
        <div className='relative max-w-[450px] w-11/12 ' >
            <img src={frameimage} alt='pattern image' width={558} height={504} loading='lazy'/>
            <img src={image} alt='login image' width={558} height={400} loading='lazy' 
            className=' absolute -top-4 right-4'
            />
        </div>
    </div>
  )
}

export default Template