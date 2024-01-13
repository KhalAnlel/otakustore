import { Button, Link } from "@nextui-org/react";
import React from "react";
import LiftArrow from "../icons/liftArrow";
import list from "../data/productsList";

interface Props {
  title: string;
  img: string;
  price: number;
  size?: string;
}

const Product = ({ list }: { list: Props }) => {
  const imageSizeClass = list.size ? `w-52 h-52` : `w-24 h-24`;
  return (
    <div
      className={`w-full h-full justify-between flex flex-col bg-white border-1 items-center p-5`}
    >
      <img src={list.img} className={imageSizeClass} />
      <div className="flex flex-col gap-4">
        <span className="text-gray-500">Type of Product</span>
        <Link
          href="#"
          className="text-sm font-semibold text-black line-clamp-2 w-11/12 hover:text-danger"
        >
          {list.title}
        </Link>
        <span className="text-xl text-danger">${list.price}</span>
      </div>
    </div>
  );
};

const PopularProducts = () => {
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
          <Product list={list[0]} />
        </div>
        <div className="row-start-2 lg:row-start-1 lg:col-start-2">
          <Product list={list[1]} />
        </div>
        <div className="lg:col-start-2 row-start-2 ">
          <Product list={list[2]} />
        </div>
        <div className="lg:row-span-2 col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-1">
          <Product list={list[3]} />
        </div>
        <div className="lg:col-start-4 lg:row-start-1 row-start-4">
          <Product list={list[4]} />
        </div>
        <div className="lg:col-start-4 lg:row-start-2 row-start-4">
          <Product list={list[5]} />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
