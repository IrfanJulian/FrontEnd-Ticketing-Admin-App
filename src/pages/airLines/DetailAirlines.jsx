import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
// import garuda from '../../assets/garuda.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailAirline = () => {

    const {id} = useParams()
    const [detail, setDetail] = useState('')
    const [form, setForm] = useState({
        name: '',
        phone: ''
    })
    const [photo, setPhoto] = useState([])

    useEffect(()=>{
        const getDetail = async() => {
            const token = localStorage.getItem('token')
                    const resDetail = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_URL_GET_DETAIL_AIRLINES}${id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }) 
                setDetail(resDetail.data.data[0])
            }
            getDetail()
        }, [id])
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlePhoto = (e) => {
        const resImg = e.target.files[0]
        setPhoto(resImg)
    }

    const handleUpload = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('phone', form.phone)
        formData.append('photo', photo, photo.name)
        try {
                await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_URL_EDIT_AIRLINES}${id}`,
                data: formData,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            alert('Update data success')
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <Navbar tittle='List Airlines' link='/airlines' tittle2='List Flight' link2='/home' />
      <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>Detail Airline :</p>
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Airline</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Name</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Phone</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-5/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
            </div>
            { detail ?  
            <div className="list flex" key={detail.id}>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{detail.id}</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <p className='text-xl my-auto text-center'>{detail.name}</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <p className='text-xl my-auto text-center'>{detail.phone}</p>
                </div>
                <div className="tittle grid border py-3 w-5/12">
                    <img src={detail.photo} alt="icon" className='w-[20rem] mx-auto' />
                </div>
            </div>
            : null }
        </div>

        <div className='container mx-auto mt-36'>
          <form onSubmit={handleUpload} className='grid'>
            <p className='text-2xl font-bold mb-5'>Edit :</p>
            <input type="text" name='name' onChange={handleChange} placeholder='Airline' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
            <input type="text" name='phone' onChange={handleChange} placeholder='phone' className='border-b-2 text-xl py-5 px-3 mt-5 w-1/2 font-semibold outline-none' />
            <div className="flex my-10">
              <p className='text-xl font-semibold text-gray-400 pl-3'>Photo</p>
              <input name='photo' onChange={handlePhoto} type="file" className='ml-10' />
            </div>
            <button type='submit' className='mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold'>Edit AirLine</button>
          </form>
        </div>
    </div>
  )
}

export default DetailAirline