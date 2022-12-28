import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './logo-ankasa'

const Navbar = ({ tittle, tittle2, link, link2 }) => {

  const navigate = useNavigate()

  return (
    <div>
        <div className="container py-8 mx-auto flex">
            <Logo classname='flex' />
            <div className="wrapper flex ml-auto">
                <Link to={link2} className='nav-link active my-auto ml-5 border-4 border-[#2395FF] py-4 px-6 rounded-xl'><p className='text-xl font-semibold'>{tittle2}</p></Link>   
                <Link to={link} className='nav-link my-auto ml-5 border-4 border-[#2395FF] py-4 px-6 rounded-xl'><p className='text-xl font-semibold'>{tittle}</p></Link>   
                <button className='px-10 ml-20 py-2 bg-[#2395FF] rounded-xl text-white text-xl font-semibold' onClick={()=>navigate('/login')}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar