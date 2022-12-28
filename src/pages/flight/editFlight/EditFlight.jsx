import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const EditFlight = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const [detail, setDetail] = useState('')
  const [form, setForm] = useState({
    airlines_id: "",
    origin: "",
    destination: "",
    departure: "",
    arrived: "",
    stock: "",
    price: "",
    code: "",
    terminal: "",
    gate: "",
    type: "",
  });

  useEffect(()=>{
    const getDetail = async() => {
      try {
        const res = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_URL_GET_DETAIL_TICKET}${id}`,
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        setDetail(res.data.data[0])
      } catch (error) {
        console.log(error);
      }
    }
    getDetail()
  }, [id, token])
  console.log(detail);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_URL_EDIT_TICKET}${id}`,
        data: form,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      alert('Update data success')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        `
        <Navbar
          tittle="List Airlines"
          link="/airlines"
          tittle2="List Flight"
          link2="/home"
        />
      </div>
      <div className="container mx-auto">
        <div className="list flex mt-16">
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">ID Flight</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-2/12">
            <p className="text-xl text-center font-semibold">Airlines</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Origin</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Destination</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Departured</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Arrived</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Price</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-1/12">
            <p className="text-xl text-center font-semibold">Class</p>
          </div>
          <div className="tittle border border-b-8 border-t-8 py-3 w-3/12">
            <p className="text-xl text-center font-semibold">Photo</p>
          </div>

        </div>    
        <div className="list flex">
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.id}</p>
          </div>
          <div className="tittle grid border py-3 w-2/12">
            <p className="text-xl my-auto text-center">{detail.airlines}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.origin}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.destination}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.departure}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.arrived}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.price}</p>
          </div>
          <div className="tittle grid border py-3 w-1/12">
            <p className="text-xl my-auto text-center">{detail.type}</p>
          </div>
          <div className="tittle grid border py-3 w-3/12">
            <img
              src={detail.photo}
              alt="icon"
              className="w-[8rem] h-[5rem] mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <form onSubmit={handleSubmit} className="grid">
          <p className="text-3xl font-bold mb-5">Edit Flights :</p>
          <input
            type="text"
            name="airlines_id"
            onChange={handleChange}
            placeholder="ID Airlines"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="origin"
            onChange={handleChange}
            placeholder="Origin"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="destination"
            onChange={handleChange}
            placeholder="Destination"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="time"
            name="departure"
            onChange={handleChange}
            placeholder="Departure"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="time"
            name="arrived"
            onChange={handleChange}
            placeholder="Arrived"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="stock"
            onChange={handleChange}
            placeholder="Stock"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="price"
            onChange={handleChange}
            placeholder="Price"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="type"
            onChange={handleChange}
            placeholder="class"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="code"
            onChange={handleChange}
            placeholder="code"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="terminal"
            onChange={handleChange}
            placeholder="terminal"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <input
            type="text"
            name="gate"
            onChange={handleChange}
            placeholder="gate"
            className="text-xl outline-none my-5 text-start w-1/2 border-b-2 font-semibold"
          />
          <button
            type="submit"
            className="mb-20 mt-5 bg-[#2395FF] py-6 w-1/2 rounded-xl text-white text-xl font-semibold"
          >
            Edit Flight
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFlight;
