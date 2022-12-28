import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Logo from '../../../components/logo-ankasa'
import { Login } from '../../../config/redux/action/authAction'

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(Login(form, navigate))
  }

  return (
    <div className='flex'>
        <div className="wrapper grid w-7/12 h-screen bg-[#2395FF]">
          <img src={logo} alt="logo" className='mx-auto my-auto' />
        </div>
        <div className="wrapper grid w-5/12 h-screen px-44 py-28">
          <div className="wrapper my-auto">
            <Logo classname='w-[5rem] h-[3rem]' />
            <p className='text-4xl font-bold mt-28'>Login</p>
            <form onSubmit={handleLogin} className='mt-5'>
              <input type="email" name='email' onChange={handleChange} value={form.email} placeholder='Email' className='text-lg outline-none py-5 border-b-2 border-[#D2C2FFAD] w-full mt-5' />
              <input type="password" name='password' onChange={handleChange} value={form.password} placeholder='Password' className='text-lg outline-none py-5 border-b-2 border-[#D2C2FFAD] w-full mt-5' />
              <button type='submit' className='bg-[#2395FF] text-xl text-white w-full font-semibold py-5 rounded-xl mt-20'>Sign in</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default LoginPage