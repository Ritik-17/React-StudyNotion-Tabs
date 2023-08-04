import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setisLoggedIn}) => {
  return (
    <Template 
      title = 'Join the millions learning to code with StudyNotion for free '
      desc1 = 'Build skills for today, tomorrow and beyond'
      desc2 = 'Education to future-proof your career'
      image={signupImg}
      formtype= 'signup'
      setisLoggedIn = {setisLoggedIn}
    />
  )
}

export default Signup