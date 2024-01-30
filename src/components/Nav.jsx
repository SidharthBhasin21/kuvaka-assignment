import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate  = useNavigate()
  const handleSignup = () => {
    navigate('/signup')
  }
  
  return (
    <div className='navbar'>

      <div className='menu'>
        
        <div className='logo'>
          <img src='src\assets\logo-white.png' alt='logo' />
        </div>


        <ul className='menu-list'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MEAL PLANS</li>
          <li>WORKOUT ROUTINE</li>
        </ul>

        </div>
        <div className='menu-btn'>
          <button className='login-btn'>Login</button>
          <button className='signup-btn' onClick={handleSignup}>Sign up</button>
        </div>

    </div>
  )
}

export default Nav