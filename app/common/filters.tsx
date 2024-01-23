"use client";
import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import animeCategories from "../data/categories";
import animeList from "../data/animeList";
import Link from "next/link";

const Filters = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="capitalize border-0 dark:bg-transparent text-black hover:text-danger"
          >
            <span className="font-bold">Select Category</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="bordered"
          aria-label="Select Category"
          className="h-52 overflow-auto"
        >
          <DropdownSection showDivider>
            <DropdownItem key={"all"}>
              <Link href={"/products"} className="hover:text-danger">
                All
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            {animeCategories.map((category, index) => (
              <DropdownItem key={index}>
                <Link
                  href={"/products?query=" + category.title.toLocaleLowerCase()}
                  className="hover:text-danger"
                >
                  {category.title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="capitalize border-0 dark:bg-transparent text-black hover:text-danger"
          >
            <span className="font-bold">Select Anime</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="bordered"
          aria-label="Select Anime"
          className="h-52 overflow-auto"
        >
          <DropdownSection showDivider>
            <DropdownItem key={"all"}>
              <Link href={"/products"} className="hover:text-danger">
                All
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            {animeList.map((anime, index) => (
              <DropdownItem key={index}>
                <Link
                  href={"/products?query=" + anime.toLocaleLowerCase()}
                  className="hover:text-danger"
                >
                  {anime}
                </Link>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Filters;
