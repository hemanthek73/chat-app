import React from 'react'
import me from '../images/me.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Easy chat</span>
    <div className='user'>
    <img src={me}  alt=''/>
    <span>Hemanth</span>
    <button>log out</button>
    </div>
      
    </div>
  )
}

export default Navbar
