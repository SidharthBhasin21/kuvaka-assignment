import React from 'react'
import logo from '../assets/logo-black.png'
const Trynow = () => {
  return (
    <div className='signup-container' >
        <div className='gif-container'>
            <div className='subscribe-container'>

                <h2>Subscribe to our Enterprise Plan</h2>
                
                <p >Our Enterprise Plan is designed for businesses and organizations that want to provide their employees or members with a personalized plans to achieve their health and wellness goals. With our Enterprise Plan, you'll get access to a suite of advanced features and tools. <br/>
                    To request more information about our Enterprise Plan , please fill out the form below. One of our representatives will be in touch with you shortly.</p>

                <ul>
                    <li>Priority access to our team of experts for technical assistance and troubleshooting</li>
                    <li>Access advanced analytics and reporting to track your organization's fitness and wellness goals</li>
                </ul>

                <img src={logo} alt='helix gif' className='logo-black' />
            </div>
        
        </div>
        <div className='form-container'>
          <div className='form'>

          

          </div>
        </div>
    </div>
  )
}

export default Trynow