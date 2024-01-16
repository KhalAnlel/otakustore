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
        <Dropdown key={index}>
          <DropdownTrigger>
            <Button
              key={index}
              className="hover:text-danger"
              variant="light"
              data-hover="transparent"
              data-focus="false"
              data-focus-visible="false"
              startContent={<DownArrow />}
            >
              <Link href={"/collections/" + category}>
                {category.toLocaleUpperCase()}
              </Link>
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
