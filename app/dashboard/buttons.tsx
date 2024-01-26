"use client"
import { Button } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const Buttons = () => {
  return (
    <div className="flex gap-4 p-5 justify-end">

    <Button variant="solid" color="primary" className="w-64"><Link href={"/dashboard/add"}>Add New Product</Link></Button>
    <Button variant="ghost" color="danger" className="w-64" onClick={()=>{axios.delete('/api/products')}}>Delete All</Button>
    </div>
  )
}

export default Buttons