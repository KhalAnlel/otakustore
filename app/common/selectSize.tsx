"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface Props {
  productsize: { id: number; name: string }[];
  onSelectSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectSize({ productsize, onSelectSize }: Props) {
  return (
    <Select
      isRequired
      variant="underlined"
      className="max-w-xs dark:text-black"
      label="Select Size"
      onChange={onSelectSize}
      value={productsize[0].name}
      placeholder={productsize[0].name}
      items={productsize}
    >
      {(productsize) => (
        <SelectItem
          key={productsize.id}
          value={productsize.name}
          className="text-black dark:text-white"
        >
          {productsize.name}
        </SelectItem>
      )}
    </Select>
  );
}
