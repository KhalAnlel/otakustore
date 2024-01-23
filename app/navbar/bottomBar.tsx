"use client";
import React from "react";
import categories from "../data/categories";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const BottomBar = () => {
  const displayedCategories = categories.slice(7, 14);
  return (
    <div className="hidden gap-8 justify-center bg-silver dark:bg-midnightblue md:flex">
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
    </div>
  );
};

export default BottomBar;
