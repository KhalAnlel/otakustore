import React from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/common/breadcrumb";
import MoreProducts from "@/app/common/moreProducts";
import prisma from "@/prisma/client";
import { Color, Product, Size } from "@prisma/client";
import ProductForm from "./productForm";
import ProductImages from "./productImages";

interface Props {
  params: { productId: string };
}

const Product = async ({ params }: Props) => {
  const product:Product = await prisma.product.findUnique({
    where: { id: parseInt(params.productId) },
    include: {
      ProductColor: true,
      ProductSize: true,
      images: true,
    },
  });

  const moreProducts = await prisma.product.findMany({
    include: {
      images: true,
    },
  });

  if (!product) notFound();

  const allColors = await prisma.color.findMany();
  const matchingColors: Color[] = [];

  product.ProductColor.map((color:Color) => {
    const matchingColor = allColors.find((c:Color) => c.id === color.color_id);
    if (matchingColor) {
      matchingColors.push(matchingColor);
    }
  });

  const allSizes = await prisma.size.findMany();
  const matchingSizes: Size[] = [];

  product.ProductSize.map((size:Size) => {
    const matchingSize = allSizes.find((s:Size) => s.id === size.size_id);
    if (matchingSize) {
      matchingSizes.push(matchingSize);
    }
  });
  return (
    <div className="bg-white p-5">
      <Breadcrumb title={product?.title} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-transparent dark:bg-transparent mb-4">
              <ProductImages images={product?.images} />
            </div>
          </div>
          <div className="md:flex-1 px-4 ">
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
              Product Title: {product?.title}
            </h2>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 ">Price: </span>
                <span className="text-gray-600 "> ${product?.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Availability: </span>
                <span className="text-gray-600 ">
                  {" "}
                  {product?.stock} In Stock
                </span>
              </div>
            </div>
            <div>
              <ProductForm
                matchingColors={matchingColors}
                matchingSizes={matchingSizes}
                stock={product.stock}
                price={product.price}
                productId={product.id}
              />
            </div>
            <div>
              <span className="font-bold text-gray-700 ">
                Product Description:
              </span>
              <p className="text-gray-600  text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 p-4 sm:p-10">
        <MoreProducts products={moreProducts} />
      </div>
    </div>
  );
};

export default Product;
