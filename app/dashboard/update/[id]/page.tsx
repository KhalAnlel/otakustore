import React from "react";
import prisma from "@/prisma/client";
import UpdateForm from "./updateForm";


interface Props {
  params: { id: string };
}

const Update = async ({params}:Props) => {
  const products = await prisma.product.findMany({
    where:{
      id:parseInt(params.id)
    },
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
            <UpdateForm product={{ ...product, color_ids, size_ids }} />
          </div>
        );
      })}
    </div>
  );
};

export default Update;
