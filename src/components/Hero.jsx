import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo-white.png"
const Hero = () => {

  const navigate  = useNavigate()
  const handleTrynow = () => {
    navigate('/trynow')
  }
  return (
    <div className='hero-container'>
        <div className='hero-ring'>
          <img src={logo} alt='hero ring' />
        </div>
        <div className='hero-text'>
            <h2>CHANGE YOUR HABITS
            CHANGE YOUR LIFE <span> WITH AI</span></h2>
            <p>Our AI-powered algorithm takes into consideration your goals, dietary restrictions, food preferences, and fitness level to create a comprehensive plan that optimizes your health and fitness journey.</p>

            <ul className='hero-list'>
                <li> EASY ONBOARDING</li>
                <li> EASY ONBOARDING</li>
                <li> EASY ONBOARDING</li>
            </ul>

            <button className='hero-btn' onClick={handleTrynow}>TRY NOW</button>

        </div>
    </div>
  )
}

export default Hero