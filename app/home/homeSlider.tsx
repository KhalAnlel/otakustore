'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-5">
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Add_a_heading_2.png?v=1678281887&width=1880'/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0610/0883/8824/files/OTAKU_1.png?v=1678299202&width=1880'/></SwiperSlide>
      </Swiper>
    </>
  );
}
