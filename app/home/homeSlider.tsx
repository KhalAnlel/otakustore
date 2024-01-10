"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Add_a_heading_2.png?v=1678281887"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0610/0883/8824/files/OTAKU_1.png?v=1678299202"
            width="100%"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
