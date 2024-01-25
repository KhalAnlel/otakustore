import React from "react";
import prisma from "@/prisma/client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ProductsTable from "./productsTable";

const Dashboard = async () => {
  const products = await prisma.product.findMany({
    include: {
      ProductColor: true,
      ProductSize: true,
    },
  });
  return (
    <div>
      <ProductsTable products={products} />
    </div>
  );
};

export default Dashboard;
