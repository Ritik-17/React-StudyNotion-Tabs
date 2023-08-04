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
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>
                Email Address <sup>*</sup>

                <input
                    required
                    type='email'
                    name='email'
                    value={formdata.email}
                    placeholder='Enter your Email'
                    onChange={changeHandler}
                />
            </label>
            <label>
                Password <sup>*</sup>

                <input 
                    required 
                    type={showPassword ? ('text') : ('password')}
                    name='password'
                    value={formdata.password}
                    placeholder='Enter your Password'
                    onChange={changeHandler}
                />

                <div onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                </div>

                <Link to="#">
                    Forgot Password
                </Link>
            </label>

            <button>
                Sign In
            </button>

        </form>
    </div>
  )
}

export default LoginForm