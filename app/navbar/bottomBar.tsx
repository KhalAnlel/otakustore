"use client";
import React from "react";
import categories from "../data/categories";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="min-w-4 min-h-4"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const BottomBar = () => {
  return (
    <div className="hidden gap-8 justify-center bg-primary dark:bg-primary md:flex">
      {categories.map((category, index) => (
        <Dropdown key={index}>
          <DropdownTrigger>
            <Button
              className="hover:text-blue-500"
              variant="light"
              data-hover="transparent"
              data-focus="false"
              data-focus-visible="false"
              startContent={arrowDown}
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
