import { Button, Link } from "@nextui-org/react";
import React from "react";
import LiftArrow from "../icons/liftArrow";
import list from "../data/productsList";

const BestProducts = () => {
  return (
    <div className="flex flex-col mt-10 p-10 sm:p-20">
      <div className="flex items-center justify-between">
        <span className="text-black text-xl font-semibold">
          Best Products This Month
        </span>
        <Button color="danger" href="/collections/collection" as="a" endContent={<LiftArrow />}>
          View All
        </Button>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto mt-10">
        {list.map((item, index) => (
          <div
            className="w-full h-44 flex bg-white border-1 items-center p-5 gap-4"
            key={index}
          >
            <img src={item.img} className="w-24 h-24" />
            <div className="flex flex-col gap-4">
              <span className="text-gray-500">Type of Product</span>
              <Link
                href="#"
                className="text-sm font-semibold text-black line-clamp-2 w-11/12 hover:text-danger"
              >
                {item.title}
              </Link>
              <span className="text-xl  text-danger">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
