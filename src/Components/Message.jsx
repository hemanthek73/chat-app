import React from 'react'
import me from '../images/me.jpg'

const Message = () => {
  return (
    <div className='message owner'>
   <div className='messageinfo'>
    <img src={me} alt=''></img>
    <span>Just now</span>
   </div>
   <div className='messagecontent'>
   <p>hello</p>
    <img src={me} alt=''></img> 

   </div>
    </div>
  )
}

export default Message
