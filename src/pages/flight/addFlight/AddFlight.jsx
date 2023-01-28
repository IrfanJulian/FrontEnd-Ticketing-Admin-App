import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../../../components/Navbar'
import { addTicket } from '../../../config/redux/action/ticketAction'

const AddFlight = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    airlines_id: '',
    origin: '',
    destination: '',
    departure: '',
    arrived: '',
    stock: '',
    code: '',
    price: '',
    type: '',
    gate: '',
    terminal: ''
  })

  // const handlePhoto = (e) => {
  //   const image = e.target.files[0]
  //   setPhoto(image)
  // }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    try {
      dispatch(addTicket(form))
      Swal.fire({
        icon: 'success',
        title: 'Add Ticket Success'
      })
      // navigate('/home')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header>
      <Navbar tittle='List Airlines' link='/airlines' tittle2='List Flight' link2='/home' />
      </header>
      <div className='container mx-auto mt-10'>
        <form onSubmit={handleUpload} className='grid'>
          <p className='text-3xl font-bold mb-5'>Add Flights :</p>
          <input type="text" name='airlines_id' onChange={handleChange} value={form.airlines_id} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='origin' onChange={handleChange} value={form.origin} placeholder='Origin' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='destination' onChange={handleChange} value={form.destination} placeholder='Destination' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="time" name='departure' onChange={handleChange} value={form.departure} placeholder='Departure' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="time" name='arrived' onChange={handleChange} value={form.arrived} placeholder='Arrived' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='stock' onChange={handleChange} value={form.stock} placeholder='stock' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='code' onChange={handleChange} value={form.code} placeholder='code' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='price' onChange={handleChange} value={form.price} placeholder='Price' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='type' onChange={handleChange} value={form.type} placeholder='Class' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='gate' onChange={handleChange} value={form.gate} placeholder='Gate' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          <input type="text" name='terminal' onChange={handleChange} value={form.terminal} placeholder='Terminal' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
          {/* <div className="flex my-10">
            <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
            <input name='photo' onChange={handlePhoto} type="file" className='ml-10' />
          </div> */}
          <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Add Flight</button>
        </form>
      </div>
    </div>
  )
}

export default AddFlight