"use client";
import Quantity from "@/app/common/quantity";
import SelectColor from "@/app/common/selectColor";
import SelectSize from "@/app/common/selectSize";
import React, { useState } from "react";
import AddToCart from "@/app/common/addToCart";
import AddToFav from "@/app/common/addToFav";

interface Props {
  matchingColors: { id: number; name: string }[];
  matchingSizes: { id: number; name: string }[];
  stock: number;
  price: number;
  productId: number;
}

const ProductForm = ({
  matchingColors,
  matchingSizes,
  stock,
  price,
  productId,
}: Props) => {
  const [selectedColor, setSelectedColor] = useState(matchingColors[0].name);
  const [selectedSize, setSelectedSize] = useState(matchingSizes[0].name);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setSelectedQuantity(newQuantity);
  };
  return (
    <div>
      <div className="mb-4">
        <SelectColor
          productcolor={matchingColors}
          onSelectColor={handleColorChange}
        />
      </div>
      <div className="mb-4">
        <SelectSize
          productsize={matchingSizes}
          onSelectSize={handleSizeChange}
        />
      </div>
      <div className="mb-10 mt-10">
        <Quantity
          stock={stock}
          selectedQuantity={selectedQuantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="flex -mx-2 mb-4">
        <AddToCart
          price={price}
          productId={productId.toString()}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          selectedQuantity={selectedQuantity}
        />
        <AddToFav productId={productId.toString()} />
      </div>
    </div>
  );
};

export default ProductForm;
