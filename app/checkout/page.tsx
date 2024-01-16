import React from "react";
import prisma from "@/prisma/client";
import ItemsTable from "./itemsTable";

const Checkout = async () => {
  const cartItems = await prisma.product.findMany();
  const images = await prisma.image.findMany();
  return (
    <div className="p-5">
      <div className="h-fit">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-4 dark:text-black">
            Shopping Cart
          </h1>
          <ItemsTable cartItems={cartItems} images={images} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
