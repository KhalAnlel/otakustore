import { Button, Link } from "@nextui-org/react";
import React from "react";
import LiftArrow from "../icons/liftArrow";
import prisma from "@/prisma/client";
import { Product } from "@prisma/client";


const BestProducts = async () => {
  const bestProducts:Product[] = await prisma.product.findMany({
    orderBy: {
      rate: "asc",
    },
    take: 6,
    include: {
      images: true,
    },
  });
  return (
    <div className="flex flex-col mt-10 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">
          Best Products This Month
        </span>
        <Button
          color="danger"
          href="/products"
          as="a"
          endContent={<LiftArrow />}
        >
          View All
        </Button>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto mt-10">
        {bestProducts.map((product, index) => (
          <div
            className="w-full h-44 flex bg-white border-1 items-center p-5 gap-4"
            key={index}
          >
            <img
              src={product.images[0].url}
              className="w-44 h-32 object-contain"
            />
            <div className="flex flex-col gap-4">
              <span className="text-gray-500">Type of Product</span>
              <Link
                href={"/products/" + product.id}
                className="text-sm font-semibold text-black w-fit hover:text-danger"
              >
                <p className="line-clamp-2">{product.title}</p>
              </Link>
              <span className="text-xl  text-danger">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
