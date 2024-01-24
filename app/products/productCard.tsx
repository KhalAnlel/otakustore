"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  productCard: {
    id: number;
    title: string;
    description: string;
    price: number;
    ProductColor: { product_id: number; color_id: number }[];
    ProductSize: { product_id: number; size_id: number }[];
    images: { id: number; product_id: number; url: string }[];
  };
  view: string;
}

export default function ProductCard({ productCard, view }: Props) {
  return !view || view === "grid" ? (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-80 sm:w-64"
      key={productCard.id}
    >
      <Link
        href={"/products/" + productCard.id}
        className="flex justify-center dark:bg-white hover:scale-110 transition-all"
      >
        <Image
          alt={productCard.images[0].url}
          className="object-contain max-h-44 w-full"
          src={productCard.images[0].url}
        />
      </Link>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Link
          href={"/products/" + productCard.id}
          className="text-tiny text-black font-bold hover:text-danger uppercase overflow-hidden"
        >
          <p className="line-clamp-2">{productCard.title}</p>
        </Link>
        <Button
          as={"button"}
          className="text-sm cursor-default text-danger font-bold bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          ${productCard.price}
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <div
      key={productCard.id}
      className="flex w-full items-center border-1 p-4 sm:p-6"
    >
      <div>
        <Link href={"/products/" + productCard.id} className="">
          <img
            src={productCard.images[0].url}
            className="w-44 min-w-20 h-44 min-h-20 object-contain rounded-lg p-2 hover:scale-110 transition-all"
          />
        </Link>
      </div>
      <div className="flex flex-col  ml-3 gap-5 w-96">
        <p className="text-sm font-bold md:text-lg text-black line-clamp-3">
          {productCard.title}
        </p>
      </div>
      <div className="ml-auto flex flex-col gap-5">
        <p className="text-sm md:text-xl font-semibold text-center text-black">
          Price:{" "}
          <span className="text-danger font-bold">${productCard.price}</span>
        </p>
        <Button variant="solid" color="danger" className="px-0 md:px-5">
          <Link
            href={"/products/" + productCard.id}
            className="bg-transparent text-tiny sm:text-md"
          >
            View Product
          </Link>
        </Button>
      </div>
    </div>
  );
}
