import prisma from "@/prisma/client";
import React from "react";
import DeleteBtn from "./deleteBtn";

const Delete = async () => {
  const products = await prisma.product.findMany({});


  return <div>
    {products.map((product)=>(
        <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.type}</p>
            <p>{product.category}</p>
            <p>{product.rate}</p>
            <p>{product.addedAt.getDate()}</p>
            <DeleteBtn productId={product.id}/>
        </div>
    ))}
  </div>;
};

export default Delete;
