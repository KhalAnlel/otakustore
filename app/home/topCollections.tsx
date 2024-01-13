"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import collections from "../data/collections";
import LiftArrow from "../icons/liftArrow";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function TopCollections() {
  return (
    <div className="flex flex-col mt-10 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">Collections</span>
        <Button color="danger" endContent={<LiftArrow />}>
          <Link href="/collections">View All</Link>
        </Button>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <Swiper
          loop={true}
          initialSlide={3}
          slidesPerView={5}
          modules={[Autoplay]}
          spaceBetween={20}
          className="mySwiper h-58"
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
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="mt-10">
              <div className="flex flex-col items-center">
                <Link href={"/collections/" + collection.title}>
                <img
                  src={collection.imgUrl}
                  className="rounded-full w-44 h-44 object-cover transform-gpu transition-transform hover:scale-105"
                  alt={collection.title}
                  />
                  </Link>
                <Link
                  href={"/collections/" + collection.title}
                  className="text-black font-semibold mt-5 hover:text-danger uppercase"
                >
                  {collection.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
