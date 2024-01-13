"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function PerPage() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["20"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="faded"
          className="capitalize border-0 bg-transparent text-black hover:text-danger"
        >
          Display: <span className="font-bold">{selectedValue} per page</span>
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
        <DropdownItem key="20">20</DropdownItem>
        <DropdownItem key="30">30</DropdownItem>
        <DropdownItem key="40">40</DropdownItem>
        <DropdownItem key="50">50</DropdownItem>
        <DropdownItem key="100">100</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
