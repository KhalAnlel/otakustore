import React from "react";
import prisma from "@/prisma/client";
import ItemsTable from "./itemsTable";

const Favourite = async () => {
  const favItems = await prisma.product.findMany();
  const images = await prisma.image.findMany();
  return (
    <div className="p-5">
      <div className="h-fit">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-4 dark:text-black">
            Favourite Cart
          </h1>
          <ItemsTable favItems={favItems} images={images} />
        </div>
      </div>
    </div>
  );
};

export default Favourite;
