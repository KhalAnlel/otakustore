"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import list from '../data/productsList'
import LiftArrow from "../icons/liftArrow";
import "swiper/css";

export default function TopCollections() {

  return (
    <div className="flex flex-col mt-10 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">
          Collections
        </span>
        <Button color="danger" endContent={<LiftArrow/>}>
          <Link  href="/collections">
          
          View All

          </Link>
        </Button>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <Swiper 
          slidesPerView={5}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={20}
          className="mySwiper h-58"
        >
          {list.map((item, index) => (
            <SwiperSlide key={index} className="mt-10">
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  className="rounded-full w-44 h-44 object-cover transform-gpu transition-transform hover:scale-105"
                  alt={item.title}
                />
                <Link
                  href="#"
                  className="text-black font-semibold mt-5 hover:text-danger"
                >
                  {item.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
