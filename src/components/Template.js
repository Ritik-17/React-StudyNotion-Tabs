import React from 'react'
import frameimage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title, desc1, desc2, formtype, image, setisLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            <div>{formtype === "signup" ? 
            (<SignupForm setisLoggedIn = {setisLoggedIn} />) : (<LoginForm setisLoggedIn = {setisLoggedIn} />)}</div>

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>Sign in with Google</button>
        </div>

        <div>
            <img src={frameimage} alt='pattern image' width={558} height={504} loading='lazy' />
            <img src={image} alt='login image' width={558} height={400} loading='lazy' />
        </div>
    </div>
  )
}

export default Template