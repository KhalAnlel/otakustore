"use client"
import { Button } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Buttons = () => {
  const router = useRouter();
  const handleDeleteAll =async () =>{
    try{
      await axios.delete('/api/products')
      router.refresh();
    }catch(error){
      console.error('Error deleting products:', error);
    }
  }
  return (
    <div className="flex gap-4 p-5 justify-end">

    <Button variant="solid" color="primary" className="w-64"><Link href={"/dashboard/add"}>Add New Product</Link></Button>
    <Button variant="ghost" color="danger" className="w-64" onClick={handleDeleteAll}>Delete All</Button>
    </div>
  )
}

export default Buttons