import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className='flex'>
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav >
          <ul className='flex gap-3 '>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className='flex ml-3 mr-3 gap-3'>
          {
            <Link to="/login">
              <button>Login</button>
            </Link>
          }
          {
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          }
          {
            <Link to="/">
              <button>Logout</button>
            </Link>
          }
          {
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          }
        </div>
    </div>
  )
}

export default Navbar