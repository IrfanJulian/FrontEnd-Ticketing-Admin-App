import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import edit from '../../assets/edit.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataAirlines, getDataAirlines } from '../../config/redux/action/airlinesAction'
import PopupDelete from '../../components/popupDelete'
import { useNavigate } from 'react-router-dom'

const AirLines = () => {

    const dispatch = useDispatch()
    // const {id} = useParams()
    const navigate = useNavigate()
    const { dataAirlinesResult } = useSelector((state)=> state.airlines)
    // const { data } = dataAirlinesResult
    // console.log(dataAirlinesResult.data);
    // const payload = dataAirlinesResult.data
    // console.log(payload);
    useEffect(()=>{
        dispatch(getDataAirlines());
    }, [dispatch])

    const handleDelete = (id) => {
        try {
            dispatch(deleteDataAirlines(id))
            alert('delete success')
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert('delete data failed')
        }
    }

  return (
    <div>
        <div className='mb-20'>
        <div>
            <Navbar tittle='Add Flight' tittle2='Add Airlines' link='/add-flight' link2='/add-airlines' />
        </div>

        {/* Content  */}
        <div className='container mx-auto mt-10'>
            <p className='text-3xl font-bold'>List Airlines :</p>
            <div className="list flex mt-16">
                <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
                    <p className='text-xl text-center font-semibold'>ID Airlines</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
                    <p className='text-xl text-center font-semibold'>Name</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Phone</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-4/12">
                    <p className='text-xl text-center font-semibold'>Photo</p>
                </div>
                <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
                    <p className='text-xl text-center font-semibold'>Delete</p>
                </div>
            </div>
            { dataAirlinesResult ? dataAirlinesResult.data.map((airlines)=>
            <div className="list flex" key={airlines.id}>
                <div className="tittle grid border py-3 w-1/12">
                    <p className='text-xl my-auto text-center'>{airlines.id}</p>
                </div>
                <div className="tittle grid border py-3 w-3/12">
                    <p className='text-xl my-auto text-center'>{airlines.name}</p>
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <p className='text-xl my-auto text-center'>{airlines.phone}</p>
                </div>
                <div className="tittle grid border py-5 w-4/12">
                    <img src={airlines.photo} alt="icon" className='w-[8rem] h-[5rem] mx-auto' />
                </div>
                <div className="tittle grid border py-3 w-2/12">
                    <PopupDelete onClick={()=>handleDelete(airlines.id)} />
                    <button onClick={()=>navigate(`/detail-airline/${airlines.id}`)} className='w-[2rem] h-[2rem] mx-auto mt-3'><img src={edit} className='w-[2rem] h-[2rem]' alt="edit" /></button>
                </div>
            </div>
            ) : <p className='text*4xl font-bold'>. . .Loading</p>}
        </div>
        {/* Content  */}

    </div>
    </div>
  )
}

export default AirLines