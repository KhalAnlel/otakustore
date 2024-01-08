"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

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
      img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
      price: "$3.00",
    },
    {
      id: 2,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
      price: "$3.00",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
      price: "$3.00",
    },
    {
      id: 4,
      title: "Accessories",
      img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
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
        {list.map((item, index) => (
          <div
            key={index}
            className="min-w-40 min-h-40 rounded-full flex flex-col items-center"
          >
            <img src={item.img} className="rounded-full  transform-gpu transition-transform hover:scale-105" alt={item.title} />
            <Link
              href={"#"}
              className="text-black dark:text-white font-semibold mt-5 hover:text-red-800"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
