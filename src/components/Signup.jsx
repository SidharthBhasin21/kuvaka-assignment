import React from 'react'
import GoogleButton from './GoogleButton'
import gif from '../assets/gifs/helix.gif'
import google from '../assets/icons/google.png'
import apple from '../assets/icons/apple.png'
import facebook from '../assets/icons/facebook.png'

const Signup = () => {
  return (
    <div className='signup-container' >
        <div className='gif-container'>
         <img src={gif} alt='helix gif'  className='gif'/>
        </div>
        <div className='form-container'>
          <div className='form'>
            <h2>Welcome!</h2>
            
            
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' name='email'  placeholder='test@example.com'/>
            
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
            
            <label htmlFor='Cpassword'>Confirm Password</label>
            <input type='password' id='Cpassword' name='Cpassword' />

            <p>By signing up you agree with <span>terms and conditions </span> </p>

            <button className='button'>Sign Up</button>
            <p className='signup-text'>Or Sign in with </p>

            <div className='social-media'>
              <img src={facebook} alt='facebook icon' />
              <GoogleButton /> 
              <img src={google} alt='google icon' />
              <img src={apple} alt='apple icon' />
            </div>

            <p>Already have an account?<span> Log in </span> </p>

          </div>
        </div>
    </div>
  )
}

export default Signup