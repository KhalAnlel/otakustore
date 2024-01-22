import { Button, Link } from "@nextui-org/react";
import React from "react";
import LiftArrow from "../icons/liftArrow";
import prisma from "@/prisma/client";

const PopularProducts = async () => {
  const bestProduct = await prisma.product.findMany({
    take: 6,
    include: {
      images: true,
    },
  });
  return (
    <div className="flex flex-col mt-20 sm:mt-30 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">
          Popular Products
        </span>
        <Button color="danger" endContent={<LiftArrow />}>
          View All
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-2 grid-rows-4 mt-10">
        <div className="lg:row-span-2 col-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-1">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[0].images[0].url}
              className="w-52 h-52 object-contain"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[0].type}
              </span>
              <Link
                href={"/products/" + bestProduct[0].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[0].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[0].price}
              </span>
            </div>
          </div>
        </div>
        <div className="row-start-2 lg:row-start-1 lg:col-start-2">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[1].images[0].url}
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[1].type}
              </span>
              <Link
                href={"/products/" + bestProduct[1].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[1].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[1].price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 row-start-2 ">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[2].images[0].url}
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[2].type}
              </span>
              <Link
                href={"/products/" + bestProduct[2].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[2].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[2].price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:row-span-2 col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-1">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[3].images[0].url}
              className="w-52 h-52 object-contain"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[3].type}
              </span>
              <Link
                href={"/products/" + bestProduct[3].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[3].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[3].price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:row-start-1 row-start-4">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[4].images[0].url}
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[4].type}
              </span>
              <Link
                href={"/products/" + bestProduct[4].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[4].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[4].price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:row-start-2 row-start-4">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={bestProduct[5].images[0].url}
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {bestProduct[5].type}
              </span>
              <Link
                href={"/products/" + bestProduct[5].id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                {bestProduct[5].title}
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${bestProduct[5].price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
