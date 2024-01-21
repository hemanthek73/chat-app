import React from 'react'
import photo from '../images/photo.png'
import attach from '../images/attach.png'

const Input = () => {
  return (
    <div className='input'>
    <input type='text' placeholder='Type something...'/>
    <div className='send'>
      <img src={attach} alt=''/>
      <input type='file' style ={{display:'none'}} id='file'/>
      <label htmlFor='file'>
      <img src={photo} alt=''/>
      </label>
      <button>Send</button>
    </div>
      
    </div>
  )
}

export default Input
