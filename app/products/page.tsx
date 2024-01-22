import Filters from "@/app/common/filters";
import React from "react";
import Breadcrumb from "@/app/common/breadcrumb";
import prisma from "@/prisma/client";
import PerPage from "@/app/common/perPage";
import SortBy from "@/app/common/sortBy";
import View from "@/app/common/view";
import ProductCard from "./productCard";
import { notFound } from "next/navigation";

interface Props {
  searchParams: {
    query: string;
    orderBy: string;
    sort: string;
    items: string;
    page: string;
    view: string;
  };
}

const Products = async ({ searchParams }: Props) => {
  if (!searchParams.query) searchParams.query = "";

  const orderBy = searchParams.orderBy
    ? { [searchParams.orderBy]: searchParams.sort }
    : undefined;

  const where = {
    OR: [
      { category: { contains: searchParams.query } },
      { type: { contains: searchParams.query } },
      { title: { contains: searchParams.query } },
    ],
  };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = parseInt(searchParams.items) || 20;

  const products = await prisma.product.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      ProductColor: true,
      ProductSize: true,
      images: true,
    },
  });
  return (
    <div className="p-5">
      <Breadcrumb title={searchParams.query} />
      <div className="flex gap-10 m-0 sm:m-10">
        <div className="w-60 h-fit dark:bg-gray-200 rounded-lg hidden sm:flex">
          <Filters />
        </div>
        <div className="w-full">
          <div className="dark:bg-gray-200 rounded-lg p-3">
            <h1 className="text-xl font-bold text-black">Products</h1>
            <div className="flex justify-end">
              <SortBy />
              <PerPage />
              <View />
            </div>
            {products.length === 0 ? (
              <div className="h-60 flex items-center justify-center">
                <p className="text-black text-xl font-semibold">
                  Products Not Found
                </p>
              </div>
            ) : (
              <div
                className={`flex mt-4 flex-wrap justify-center ${
                  !searchParams.view || searchParams.view === "grid"
                    ? "gap-4"
                    : "gap-0"
                }`}
              >
                {products.map((product, index) => (
                  <ProductCard
                    productCard={product}
                    key={index}
                    view={searchParams.view}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
