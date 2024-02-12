import { Button, Link } from "@nextui-org/react";
import React from "react";
import LiftArrow from "../icons/liftArrow";
import prisma from "@/prisma/client";

const PopularProducts = async () => {
  const popularProduct = await prisma.product.findMany({
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
        <Button color="danger" endContent={<LiftArrow />} as={'a'} href="/products">
          View All
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-2 grid-rows-4 mt-10">
        <div className="lg:row-span-2 col-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-1">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[0]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-52 h-52 object-contain"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[0]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[0]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[0]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[0]?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="row-start-2 lg:row-start-1 lg:col-start-2">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[1]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[1]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[1]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[1]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[1]?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 row-start-2 ">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[2]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[2]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[2]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[2]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[2]?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:row-span-2 col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-1">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[3]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-52 h-52 object-contain"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[3]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[3]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[3]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[3]?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:row-start-1 row-start-4">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[4]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[4]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[4]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[4]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[4]?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-start-4 lg:row-start-2 row-start-4">
          <div
            className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
          >
            <img
              src={popularProduct[5]?.images[0]?.url || "no picture"}
              alt="no picture"
              className="w-24 h-24 object-contain mb-4"
            />
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 uppercase text-sm text-center">
                {popularProduct[5]?.type}
              </span>
              <Link
                href={"/products/" + popularProduct[5]?.id}
                className="text-lg text-center font-semibold text-black line-clamp-2 w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{popularProduct[5]?.title}</p>
              </Link>
              <span className="text-xl text-danger text-center font-bold">
                ${popularProduct[5]?.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
