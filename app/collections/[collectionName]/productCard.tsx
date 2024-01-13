"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
}

export default function ProductCard({
  productDetails,
}: {
  productDetails: Props;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      key={productDetails.id}
    >
      <Link href={"/collections/collection/products/" + productDetails.id}>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={productDetails.imgUrl}
          width={200}
        />
      </Link>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Link
          href={"/collections/animes/products/" + productDetails.id}
          className="text-tiny text-black font-bold hover:text-danger uppercase overflow-hidden"
        >
          {productDetails.title}
        </Link>
        <Button
          isDisabled
          className="text-tiny disabled:text-black text-black font-bold bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          ${productDetails.price}
        </Button>
      </CardFooter>
    </Card>
  );
}
