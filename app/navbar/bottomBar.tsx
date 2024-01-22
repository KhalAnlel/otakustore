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
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="hidden gap-8 justify-center bg-silver dark:bg-midnightblue md:flex">
      {categories.map((category, index) => (
        <Button
          key={index}
          className="hover:text-danger"
          variant="light"
          data-hover="transparent"
          data-focus="false"
          data-focus-visible="false"
        >
          <Link href={"/products?query=" + category}>
            {category.toLocaleUpperCase()}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default BottomBar;
