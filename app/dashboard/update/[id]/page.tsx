import React from "react";
import prisma from "@/prisma/client";
import UpdateForm from "./updateForm";
import { Color, Product,Size } from "@prisma/client";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface Props {
  params: { id: string };
}

const Update = async ({params}:Props) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  const products: Product[] = await prisma.product.findMany({
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
        const color_ids = product.ProductColor.map((color:Color) => color.color_id);
        const size_ids = product.ProductSize.map((size:Size) => size.size_id)

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
