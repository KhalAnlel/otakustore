import React from 'react'
import TopBar from './topBar'
import BottomBar from './bottomBar'
import prisma from '@/prisma/client';

const Navbar = async () => {
  const allProducts = await prisma.product.findMany();
  const images = await prisma.image.findMany();
  return (
    <div>
        <TopBar allProducts={allProducts} images={images}/>
        <BottomBar/>
    </div>
  )
}

export default Navbar