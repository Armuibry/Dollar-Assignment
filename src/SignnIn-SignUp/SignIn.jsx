import React from 'react'
import './SignIn.css';
// import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signIn-container'>
      <div className='signIn-child'>
        <h1 className='signIn-title'>SIGN IN</h1>
        <form className='signIn-form'>
          <input placeholder="username" />
          <input placeholder="password" />
          <button className='signIn-btn'>LOGIN</button>
          <div className='signIn-link'>DO NOT YOU REMEMBER THE PASSWORD?</div>
          <div className='signIn-link'>CREATE A NEW ACCOUNT</div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
