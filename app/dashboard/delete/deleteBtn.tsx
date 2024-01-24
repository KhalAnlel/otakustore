'use client'
import React from 'react'
import axios from "axios";

const DeleteBtn = ({productId}:{productId:number}) => {
  return (
    <div><button className='btn btn-secondary' onClick={()=>{axios.delete('/api/products/'+productId)}}>delete</button></div>
  )
}

export default DeleteBtn