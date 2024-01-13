'use client'
import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";

export default function SelectColor() {
  return (
    <Select
        // items={}
    isRequired
    variant="underlined"
      className="max-w-xs dark:text-black"
      label="Select Color"
    >
        {/* {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>} */}
      <SelectItem
        key="black"
        startContent={<div className="w-6 h-6 rounded-full bg-black"></div>}
      >
        Black
      </SelectItem>
      <SelectItem
        key="red"
        startContent={<div className="w-6 h-6 rounded-full bg-red-950"></div>}
      >
        Red
      </SelectItem>
      <SelectItem
        key="blue"
        startContent={<div className="w-6 h-6 rounded-full bg-blue-950"></div>}
      >
        Blue
      </SelectItem>
      <SelectItem
        key="purple"
        startContent={
            <div className="w-6 h-6 rounded-full bg-purple-950"></div>
        }
      >
        Purple
      </SelectItem>
      <SelectItem
        key="yellow"
        startContent={<div className="w-6 h-6 rounded-full bg-yellow-400"></div>}
      >
        Yellow
      </SelectItem>
      <SelectItem
        key="green"
        startContent={<div className="w-6 h-6 rounded-full bg-green-800"></div>}
      >
        Green
      </SelectItem>
    </Select>
  );
}
