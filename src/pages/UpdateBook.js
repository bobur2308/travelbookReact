import React from 'react';
import axios, { AxiosError } from 'axios';
import { useState,useEffect } from 'react';
import { useParams,useNavigate, useNavigationType } from 'react-router-dom';


function UpdateBook() {
  const [title,setTitle] = useState('')
  const [image,setImage] = useState('')
  const [descr,setDescr] = useState('')

  const {id} = useParams()
  const navigate = useNavigate()
  const fetchData = async ()=>{
    const {data} = await axios.get(`https://travelbook-node.vercel.app/api/travel/${id}`)
    setTitle(data.travel.title)
    setDescr(data.travel.descr)
    setImage(data.travel.image)
  }
  const updateHandler = async(e)=>{
    e.preventDefault()
    await axios.put(`https://travelbook-node.vercel.app/api/travel/${id}`,{
      title,
      descr,
      image
    })
    navigate('/')
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <form onSubmit={updateHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={e=>setTitle(e.target.value)} value={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">Description</label>
          <input type="text" className="form-control" id="descr" name='descr' onChange={e=>setDescr(e.target.value)} value={descr}/>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" name='image' onChange={e=>setImage(e.target.value)} value={image}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default UpdateBook;