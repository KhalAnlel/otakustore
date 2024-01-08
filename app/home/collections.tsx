"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const arrowLift = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Collections() {
  const list = [
    {
      id: 1,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/bzbp35384-1-removebg-preview_300x.png?v=1669167327",
      price: "$3.00",
    },
    {
      id: 2,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/image_900x_83eeb675-32d0-439a-8382-3d1a56b9a810_300x.webp?v=1697371679",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/8902_13dc48a3-100e-4d68-ae82-e3de58d1edf7_290x.jpg?v=1704379513",
      price: "$3.00",
    },
    {
      id: 4,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/IMG_6215_300x.png?v=1704215112",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/418A5058-79C8-47F4-A26D-4A38A07BBC0F_300x.jpg?v=1701917348",
      price: "$3.00",
    },
    {
      id: 4,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/Untitled-1_copy_300x.jpg?v=1614729552",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
      price: "$3.00",
    },
  ];

  return (
    <div className="flex flex-col mt-20 p-10">
      <div className="flex items-center justify-between">
        <span className="text-black dark:text-white text-xl font-semibold">
          Collections
        </span>
        <Button color="danger" endContent={arrowLift}>
          View All
        </Button>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {list.map((item, index) => (
            <div
              key={index}
             
            >
              <SwiperSlide  className="w-48 rounded-full flex flex-col items-center ">
                <img
                  src={item.img}
                  className="rounded-full w-52 h-52  transform-gpu transition-transform hover:scale-105"
                  alt={item.title}
                />
                <Link
                  href={"#"}
                  className="text-black dark:text-white font-semibold mt-5 hover:text-danger"
                >
                  {item.title}
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
