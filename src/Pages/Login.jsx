import React from 'react'
import add from '../images/photo.png'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
      <span className='logo'>Easy chat</span>
      <span className='title'>Register</span>
        <form >
       
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
       
        <button>sign in</button>
        </form>
        <p>do you don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
