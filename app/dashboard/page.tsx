import React from "react";
import prisma from "@/prisma/client";
import ProductsTable from "./productsTable";
import Buttons from "./buttons";

const Dashboard = async () => {
  const products = await prisma.product.findMany({
    include: {
      ProductColor: true,
      ProductSize: true,
    },
  });
  return (
    <div className="dark:bg-default-50 flex flex-col gap-5">
      <ProductsTable products={products} />
      <Buttons/>
    </div>
  );
};

export default Dashboard;
