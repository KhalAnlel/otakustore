import React from "react";
import prisma from "@/prisma/client";
import UpdateForm from "./updateForm";

const Update = async () => {
  const products = await prisma.product.findMany({
    include: {
      ProductColor: true,
      ProductSize: true,
    },
  });

  return (
    <div>
      {products.map((product) => {
        const color_ids = product.ProductColor.map((color) => color.color_id);
        const size_ids = product.ProductSize.map((size) => size.size_id);

        return (
          <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.type}</p>
            <p>{product.category}</p>
            <p>{product.rate}</p>
            <p>{product.addedAt.getDate()}</p>
            <UpdateForm product={{ ...product, color_ids, size_ids }} />
          </div>
        );
      })}
    </div>
  );
};

export default Update;
