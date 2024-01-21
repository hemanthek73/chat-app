import React from 'react'
import me from '../images/me.jpg'

const Chats = () => {
  return (
    <div className='chats'>
    <div className='userchat'>
    <img src={me} alt=''/>
    <div className='userchatinfo'>
    <span>chandan</span>
    <p>hello</p>
    </div>
    </div>
    <div className='userchat'>
    <img src={me} alt=''/>
    <div className='userchatinfo'>
    <span>chandan</span>
    <p>hello</p>
    </div>
    </div>
    <div className='userchat'>
    <img src={me} alt=''/>
    <div className='userchatinfo'>
    <span>chandan</span>
    <p>hello</p>
    </div>
    </div>
    <div className='userchat'>
    <img src={me} alt=''/>
    <div className='userchatinfo'>
    <span>chandan</span>
    <p>hello</p>
    </div>
    </div>
    </div>
  )
}

export default Chats
