import Filters from "@/app/collections/[collectionName]/filters";
import React from "react";
import ProductsGrid from "./productsGrid";
import Breadcrumb from "@/app/common/breadcrumb";

const Collection = ({ params }: { params: { collectionName: string } }) => {
  return (
    <div className="p-10">
      <Breadcrumb />
      <div className="flex gap-10 m-10">
        <div className="w-60 h-fit dark:bg-gray-200 rounded-lg">
          <Filters />
        </div>
        <div className="w-full">
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
};

export default Collection;
