import React from 'react';
import add from '../images/photo.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
const Register = () => {
const handlesubmit=(e)=>{
  e.preventDefault();
 const displayName=e.target[0].value;
 const email=e.target[1].value;
 const password=e.target[2].value;
 const file=e.target[3].files[0];


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });
}
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
      <span className='logo'>Easy chat</span>
      <span className='title'>Register</span>
        <form  onSubmit={handlesubmit}>
        <input type='text' placeholder='display name'/>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <input type='file' id='file'/>
        <label htmlFor='file'>
          <img src={add} alt=''/>
          <span>add an avatar</span>
        </label>
        <button>Register now</button>
        </form>
        <p>do you have an account? login</p>
      </div>
    </div>
  )
}

export default Register
