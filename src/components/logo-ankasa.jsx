import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'

const Logo = ({ classname }) => {
  return (
    <Link to={'/home'}>
      <div className={classname}>
          <img src={logo2} alt="logo" className='w-[4rem]' />
          <p className='text-5xl font-bold my-auto ml-7'>Ankasa</p>
      </div>
    </Link>
  )
}

export default Logo