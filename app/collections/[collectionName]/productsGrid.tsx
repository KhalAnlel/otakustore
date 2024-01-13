import PerPage from "@/app/common/perPage";
import SortBy from "@/app/common/sortBy";
import View from "@/app/common/view";
import React from "react";
import ProductCard from "./productCard";
import products from "@/app/data/products";

const ProductsGrid = () => {
  return (
    <div className="dark:bg-gray-200 rounded-lg p-3">
      <h1 className="text-xl font-bold text-black">Products</h1>
      <div className="flex justify-end">
        <SortBy />
        <PerPage />
        <View />
      </div>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {products.map((product,index) => (
          <ProductCard productDetails={product} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
