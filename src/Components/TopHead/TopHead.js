import React from 'react'
import logo from '../../images/logo.png'
import '../../Components/TopHead/headerStyle.css'

const TopHead = () => {
  return (
    <div className='tophead'>
      <img src={logo}></img>
    </div>
  )
}

export default TopHead