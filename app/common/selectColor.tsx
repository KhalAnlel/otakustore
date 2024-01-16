"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface Props {
  productcolor: { id: number; name: string }[];
  onSelectColor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectColor({ productcolor, onSelectColor }: Props) {
  return (
    <Select
      isRequired
      variant="underlined"
      className="max-w-xs dark:text-black"
      label="Select Color"
      onChange={onSelectColor}
      value={productcolor[0].name}
      placeholder={productcolor[0].name}
      items={productcolor}
    >
      {(productcolor) => (
        <SelectItem
          key={productcolor.id}
          value={productcolor.name}
          className="text-black dark:text-white"
        >
          {productcolor.name}
        </SelectItem>
      )}
    </Select>
  );
}
