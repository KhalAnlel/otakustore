"use client";
import React from "react";
import categories from "../data/categories";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const BottomBar = () => {
  const displayedCategories = categories.slice(0, 7);
  return (
    <div className="hidden gap-8 justify-center bg-silver dark:bg-midnightblue md:flex">
      {displayedCategories.map((category, index) => (
        <Button
          key={index}
          className="hover:text-danger"
          variant="light"
          data-hover="transparent"
          data-focus="false"
          data-focus-visible="false"
        >
          <Link href={"/products?query=" + category.title}>
            {category.title.toLocaleUpperCase()}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default BottomBar;
