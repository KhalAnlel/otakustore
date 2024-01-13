"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function SortBy() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["featured"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="faded"
          className="capitalize border-0 dark:bg-transparent text-black hover:text-danger"
        >
          Sort By: <span className="font-bold">{selectedValue}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="featured">Featured</DropdownItem>
        <DropdownItem key="best_selling">Best Selling</DropdownItem>
        <DropdownItem key="alphabetacally_a_z">Alphabetacally, A-Z</DropdownItem>
        <DropdownItem key="alphabetacally_z_a">Alphabetacally, Z-A</DropdownItem>
        <DropdownItem key="price_low_high">Price, Low to High</DropdownItem>
        <DropdownItem key="price_high-low">Price, High to Low</DropdownItem>
        <DropdownItem key="date_new_old">Date, New to Old</DropdownItem>
        <DropdownItem key="date_old_new">Date, Old to New</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
