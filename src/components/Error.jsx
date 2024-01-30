import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <div className='flex'>
      <h1>You need to login first</h1>
      <button className='hero-btn' onClick={handleClick}>Go To SignUp page</button>
    </div>
  )
}

export default Error