"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function SortBy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const changeItems = (orderBy: string, sort: string,label:string) => {
    const params = new URLSearchParams(searchParams);
    setValue(label)
    params.set("orderBy", orderBy.toString());
    params.set("sort", sort.toString());
    params.set("page", "1");
    router.push("?" + params.toString());
  };

  const [value,setValue] = useState("Alphabetacally, A-Z");

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="faded"
          className="capitalize border-0 dark:bg-transparent text-black hover:text-danger"
        >
          Sort By: <span className="font-bold">{value}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
      >
        <DropdownItem key="alphabetacally_a_z" onClick={() => changeItems("title","asc","Alphabetacally, A-Z")}>Alphabetacally, A-Z</DropdownItem>
        <DropdownItem key="alphabetacally_z_a" onClick={() => changeItems("title", "desc","Alphabetacally, Z-A")}>Alphabetacally, Z-A</DropdownItem>
        <DropdownItem key="price_high-low" onClick={() => changeItems("price", "desc","Price, High to Low")}>Price, High to Low</DropdownItem>
        <DropdownItem key="price_low_high" onClick={() => changeItems("price","asc","Price, Low to High")}>Price, Low to High</DropdownItem>
        <DropdownItem key="date_new_old" onClick={() => changeItems("addedAt","desc","Date, New to Old")}>Date, New to Old</DropdownItem>
        <DropdownItem key="date_old_new" onClick={() => changeItems("addedAt","asc","Date, Old to New")}>Date, Old to New</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
