import React from "react";
import Quantity from "../common/quantity";
import SelectColor from "../common/selectColor";
import SelectSize from "../common/selectSize";
import prisma from "@/prisma/client";

const ProductOfTheWeek =async () => {
  const bestProduct = await prisma.product.findFirst({
    where:{
      rate:4,
    },
    include: {
      images: true,
    },
  })
  console.log(bestProduct?.images[0].url)
  return (
    <div className="mt-20">
      <div className="bg-white py-8 mt-20 sm:mt-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={bestProduct?.images[0].url}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-danger hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-300 hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-black hover:text-white">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <span className="text-3xl font-semibold text-danger">
                Product of the Week!
              </span>
              <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                {bestProduct?.title}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Price:</span>
                  <span className="text-gray-600 "> ${bestProduct?.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 "> {bestProduct?.stock} in stock</span>
                </div>
              </div>
              <div className="mb-4">
              <SelectColor />
            </div>
            <div className="mb-4">
              <SelectSize />
            </div>
            <div className="mb-10 mt-10">
              <Quantity />
            </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                 {bestProduct?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfTheWeek;
