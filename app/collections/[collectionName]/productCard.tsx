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
}

export default function ProductCard({ productCard }: Props) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-64"
      key={productCard.id}
    >
      <Link
        href={"/collections/collection/products/" + productCard.id}
        className="flex justify-center dark:bg-white hover:scale-110 transition-all"
      >
        <Image
          alt={productCard.images[0].url}
          className="object-cover"
          height={200}
          src={productCard.images[0].url}
          width={200}
        />
      </Link>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Link
          href={"/collections/animes/products/" + productCard.id}
          className="text-tiny text-black font-bold hover:text-danger uppercase overflow-hidden"
        >
          {productCard.title}
        </Link>
        <Button
          isDisabled
          className="text-tiny disabled:text-black text-black font-bold bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          ${productCard.price}
        </Button>
      </CardFooter>
    </Card>
  );
}
