import React from 'react';
import './SignUp.css';


const SignUp = () => {
  return (
    <div className='signUp-container'>
      <div className='signUp-child'>
        <h1 className='signUp-title'>CREATE AN ACCOUNT</h1>
        <form className='signUp-form'>
            <input placeholder='First name'/>
            <input  placeholder='Last name'/>
            <input  placeholder='username'/>
            <input  placeholder='Email'/>
            <input  placeholder='Password'/>
            <input  placeholder='Confirm Password'/>
            <span  className='signUp-agree' type='checkbox'>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className='signUp-btn'>CREATE</button>

        </form>
      </div>
    </div>
  )
}

export default SignUp
