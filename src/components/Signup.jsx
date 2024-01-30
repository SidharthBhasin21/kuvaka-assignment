import React from 'react'
import GoogleButton from './GoogleButton'

const Signup = () => {
  return (
    <div className='signup-container' >
        <div className='gif-container'>
         <img src='src\assets\gifs\helix.gif' alt='helix gif'  className='gif'/>
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
              <img src='src\assets\icons\facebook.png' alt='facebook icon' />
              <GoogleButton /> 
              <img src='src\assets\icons\google.png' alt='google icon' />
              <img src='src\assets\icons\apple.png' alt='apple icon' />
            </div>

            <p>Already have an account?<span> Log in </span> </p>

          </div>
        </div>
    </div>
  )
}

export default Signup