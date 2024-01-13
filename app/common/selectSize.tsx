"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectSize() {
  return (
    <Select
      // items={}
      isRequired
      variant="underlined"
      className="max-w-xs dark:text-black"
      label="Select Size"
    >
      {/* {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>} */}
      <SelectItem key="xs">XS</SelectItem>
      <SelectItem key="s">S</SelectItem>
      <SelectItem key="m">M</SelectItem>
      <SelectItem key="lg">L</SelectItem>
      <SelectItem key="xl">XL</SelectItem>
      <SelectItem key="2xl">2XL</SelectItem>
      <SelectItem key="2xl">3XL</SelectItem>
      <SelectItem key="2xl">4XL</SelectItem>
    </Select>
  );
}
