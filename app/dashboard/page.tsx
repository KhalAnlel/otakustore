import React from "react";
import prisma from "@/prisma/client";
import ProductsTable from "./productsTable";
import Buttons from "./buttons";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }
  else  redirect('/');
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
