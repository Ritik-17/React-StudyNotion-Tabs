import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setisLoggedIn}) => {
    const navigate = useNavigate();

    const [formData,  setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    function changeHandler(event){
        setFormData((prev) =>({
            ...prev, [event.target.name]:event.target.value
    })
    )}

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        if( formData.password !== formData.confirmPassword ){
            toast.error('Password do not match');
            return
        }
        else {
            setisLoggedIn(true);
            toast.success('Account Created');
            navigate('/dashboard');
            const finalData = { ...formData, accType}
            console.log(finalData)
        }

    }
    const [accType, setAccType] = useState("");

  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button onClick={()=>setAccType("Student")}
                className ={`${accType === "Student" ? " bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>
            <button onClick={()=>setAccType("Instructor")}
                className = {`${accType === "Instructor" ? " bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            
        {/* First name and last name */}
            <div className='flex gap-x-4 mt-3'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name
                        <sup className=' text-pink-200 '>*</sup>
                    </p>
                    <input
                        required
                        name='firstName'
                        placeholder='Enter First Name'
                        value={formData.value}
                        onChange={changeHandler}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Last Name 
                        <sup className=' text-pink-200 '>*</sup>
                    </p>
                    <input
                        required
                        name='lastName'
                        placeholder='Enter Last Name'
                        value={formData.value}
                        onChange={changeHandler}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
            </div>
            {/* email */}
            <label className='w-full mt-3'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address 
                    <sup className=' text-pink-200 '>*</sup>
                </p>
                <input
                        required
                        name='email'
                        placeholder='Enter Email Address'
                        value={formData.email}
                        onChange={changeHandler}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

            </label>

            {/* create and confirm password */}
            <div className=' w-full flex gap-x-4 mt-3'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Enter Password 
                        <sup className=' text-pink-200 '>*</sup>
                    </p>
                    <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder='Enter Password'
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    <div className=' absolute right-3 top-[41px] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </div>

                </label>

                <label className=' w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Confirm Password 
                        <sup className=' text-pink-200 '>*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword ? ('text') : ('password')}
                        name='confirmPassword'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        placeholder='Confirm Password'
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    <div className=' absolute right-3 top-[41px] cursor-pointer'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </div>

                </label>
            </div>
            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
                    Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm