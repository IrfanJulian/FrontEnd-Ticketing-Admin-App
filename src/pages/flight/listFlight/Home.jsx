import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
// import garuda from '../../../assets/garuda.png'
// import dlt from '../../../assets/delete.png'
import edit from '../../../assets/edit.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTicket, getDataTicket } from '../../../config/redux/action/ticketAction'
import PopupDelete from '../../../components/popupDelete'

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dataTicketResult } = useSelector((state) => state.ticket)
    const payload = dataTicketResult.data
    let [page, setPage] = useState(1)

    useEffect(()=>{
        console.log('1.');
        dispatch(getDataTicket(page));
    }, [dispatch, page]);

    const handleDelete = (id) => {
        try {
            dispatch(deleteTicket(id))
            alert('delete success')
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert('delete data failed')
        }
    }

  return (
    <div>
        <div>
            <Navbar tittle='Add Flight' tittle2='Add Airlines' link='/add-flight' link2='/add-airlines' />
        </div>

        <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>List Flights :</p>
            {/* <div className="search flex mt-16">
                <input type="text" name='search' placeholder='Search...' className='border-2 py-3 px-5 text-xl font-semibold outline-none rounded-xl' />
                <button className='ml-5 px-2 py-2 bg-[#2395FF] rounded-xl text-white text-xl font-semibold'>Search</button>
            </div> */}
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Flight</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Airlines</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Origin</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Destination</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Departured</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Arrived</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Price</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Class</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>Manage</p>
                </div>
            </div>
            { payload ? payload.map((ticket)=>      
            <div className="list flex" key={ticket.id}>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.id}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.airlines}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.origin}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.destination}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.departure}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.arrived}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.price}</p>
                </div>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{ticket.type}</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <img src={ticket.photo} alt="icon" className='w-[8rem] h-[5rem] mx-auto' />
                </div>
                <div className="tittle flex border py-3 w-1/12">
                    <PopupDelete onClick={()=>handleDelete(ticket.id)} />
                    <button className='mx-auto' onClick={()=>navigate(`/edit-flight/${ticket.id}`)}><img src={edit} alt="icon" className='w-[2rem] h-[2rem]' /></button>
                </div>
            </div>
            ) : 
            <div>
                <p className='text-4xl font-bold'>. . . Please Wait</p>
            </div>
            }
        </div>
        <div className='container mx-auto flex my-10'>
            {page > 1 ?
            <button onClick={()=>setPage(page -=1)} className='text-2xl font-semibold bg-[#2395FF] rounded-xl py-3 px-7 text-white'>Prev</button>
            : null }
            <button onClick={()=>setPage(page +=1)} className='text-2xl font-semibold bg-[#2395FF] rounded-xl py-3 px-7 text-white ml-auto'>Next</button>
        </div>

    </div>
  )
}

export default Home