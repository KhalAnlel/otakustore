'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Add_a_heading_2.png?v=1678281887' width="100%"/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0610/0883/8824/files/OTAKU_1.png?v=1678299202' width="100%"/></SwiperSlide>
      </Swiper>
    </>
  );
}
