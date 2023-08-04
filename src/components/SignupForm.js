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
        }

    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            
        {/* First name and last name */}
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                        required
                        name='firstName'
                        placeholder='Enter First Name'
                        value={formData.value}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                        required
                        name='lastName'
                        placeholder='Enter Last Name'
                        value={formData.value}
                        onChange={changeHandler}
                    />
                </label>
            </div>
            {/* email */}
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                        required
                        name='email'
                        placeholder='Enter Email Address'
                        value={formData.email}
                        onChange={changeHandler}
                        />

            </label>

            {/* create and confirm password */}
            <div>
                <label>
                    <p>Enter Password <sup>*</sup></p>
                    <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder='Enter Password'
                        />
                    <div onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                    </div>

                </label>

                <label>
                    <p>Confirm Password <sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ('text') : ('password')}
                        name='confirmPassword'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        placeholder='Confirm Password'
                        />
                    <div onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                    </div>

                </label>

                <button>
                    Create Account
                </button>
                
                
                
            </div>
        </form>
    </div>
  )
}

export default SignupForm