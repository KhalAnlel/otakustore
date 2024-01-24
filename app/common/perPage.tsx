"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function PerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const changeItems = (items: number) => {
    const params = new URLSearchParams(searchParams);
    setValue(items);
    params.set("items", items.toString());
    params.set("page", "1");
    router.push("?" + params.toString());
  };

  const [value, setValue] = useState(20);

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="faded"
          className="capitalize border-0 dark:bg-transparent text-black hover:text-danger"
        >
          Display: <span className="font-bold">{value} per page</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
      >
        <DropdownItem key="20" onClick={() => changeItems(20)}>
          20
        </DropdownItem>
        <DropdownItem key="30" onClick={() => changeItems(30)}>
          30
        </DropdownItem>
        <DropdownItem key="40" onClick={() => changeItems(40)}>
          40
        </DropdownItem>
        <DropdownItem key="50" onClick={() => changeItems(50)}>
          50
        </DropdownItem>
        <DropdownItem key="100" onClick={() => changeItems(100)}>
          100
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
