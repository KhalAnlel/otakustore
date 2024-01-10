"use client";
import React from "react";
import categories from "../data/categories";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import DownArrow from "../icons/downArrow";

const BottomBar = () => {
  return (
    <div className="hidden gap-8 justify-center bg-lightgray dark:bg-midnightblue md:flex">
      {categories.map((category, index) => (
        <Dropdown key={index}>
          <DropdownTrigger>
            <Button
              className="hover:text-blue-500"
              variant="light"
              data-hover="transparent"
              data-focus="false"
              data-focus-visible="false"
              startContent={<DownArrow/>}
            >
              {category.toLocaleUpperCase()}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem>Item</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
};

export default BottomBar;
