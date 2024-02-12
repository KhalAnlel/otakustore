"use client";
import React from "react";
import categories from "../data/categories";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import DownArrow from "../icons/downArrow";

const BottomBar = () => {
  const displayedCategories = categories.slice(0, 6);
  const otherCategories = categories.slice(6, 14);
  return (
    <div className="hidden gap-8 justify-center bg-silver dark:bg-midnightblue md:flex">
       <Button
          key={"all"}
          className="hover:text-danger p-0 px-5"
          variant="light"
          data-hover="transparent"
          data-focus="false"
          data-focus-visible="false"
        >
          <Link href={"/products"}>
           All
          </Link>
        </Button>
      {displayedCategories.map((category, index) => (
        <Button
          key={index}
          className="hover:text-danger p-0 px-5"
          variant="light"
          data-hover="transparent"
          data-focus="false"
          data-focus-visible="false"
        >
          <Link href={"/products?query=" + category.title.toLocaleLowerCase()}>
            {category.title.toLocaleUpperCase()}
          </Link>
        </Button>
      ))}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" startContent={<DownArrow />}>
            More
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {otherCategories.map((category, index) => (
            <DropdownItem key={index}>
              <Link
                href={"/products?query=" + category.title.toLocaleLowerCase()}
                className="hover:text-danger"
              >
                {category.title.toLocaleUpperCase()}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BottomBar;
