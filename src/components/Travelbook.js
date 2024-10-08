import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"

function Travelbook() {
  const [travelBook,setTravelBook] = useState([])
  const [id,setId] = useState('')

  const fetchData = async ()=>{
    const {data}  = await axios.get('https://travelbook-node.vercel.app/api/travel');
    setTravelBook(data.travels)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const deleteHandler = async (e)=>{
    e.preventDefault()
    await axios.delete(`https://travelbook-node.vercel.app/api/travel/${id}`);
    fetchData()
  }

  return (
    <div>
      {travelBook.map(tb=>
        <div key={tb._id} className="card mb-3 mt-3">
        <img src={tb.image} className="card-img-top" alt={tb.title}/>
        <div className="card-body">
          <h5 className="card-title">{tb.title}</h5>
          <p className="card-text">{tb.descr}</p>
          <div className='d-flex justify-content-start '>
            <Link className='btn btn-dark' to={`/update/${tb._id}`}>Update</Link>
            <form onSubmit={deleteHandler}>
              <button className='btn btn-danger mx-2' onClick={()=>setId(tb._id)}>Delete</button>
            </form>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Travelbook;