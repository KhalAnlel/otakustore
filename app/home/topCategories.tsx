"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import LiftArrow from "../icons/liftArrow";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import categories from "../data/categories";

export default function TopCategories() {
  return (
    <div className="flex flex-col mt-10 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">Top Categories</span>
        <Button
          color="danger"
          as={"a"}
          href="/products"
          endContent={<LiftArrow />}
        >
          View All
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
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="mt-10">
              <div className="flex flex-col items-center">
                <Link href={"/products?query=" + category.title}>
                  <img
                    src={category.imgUrl}
                    className="rounded-full w-44 h-44 object-cover transform-gpu transition-transform hover:scale-105"
                    alt={category.imgUrl}
                  />
                </Link>
                <Link
                  href={"/products?query=" + category.title}
                  className="text-black font-semibold mt-5 hover:text-danger uppercase"
                >
                  {category.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
