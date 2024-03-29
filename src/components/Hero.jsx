import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo-white.png"
import img1 from "../assets/images/ellipse1.png"
import img2 from "../assets/images/ellipse2.png"
import img3 from "../assets/images/ellipse3.png"
import img4 from "../assets/images/ellipse4.png"
import img5 from "../assets/images/ellipse5.png"


const Hero = () => {

  const navigate  = useNavigate()
  const handleTrynow = () => {
    navigate('/trynow')
  }
  return (
    <div className='hero-container'>
        <div className='hero-ring'>
          <img src={logo} className='hero-logo'/>
          <img src={img1} className='ellipse img1'/>
          <img src={img2} className='ellipse img2'/>
          <img src={img3} className='ellipse img3'/>
          <img src={img4} className='ellipse img4'/>
          <img src={img5} className='ellipse img5'/>
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