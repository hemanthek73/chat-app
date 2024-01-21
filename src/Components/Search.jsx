import React from 'react'
import me from '../images/me.jpg'

const Search = () => {
  return (
    <div className='search'>
    <div className='searchForm'>
      <input type='text' placeholder='search user'/>
    </div>
    <div className='userchat'> 
    <img src={me} alt=''/>
    <div className='userchatinfo'>
      <span>Hemanth</span>
    </div>
    </div>
      
    </div>
  )
}

export default Search
