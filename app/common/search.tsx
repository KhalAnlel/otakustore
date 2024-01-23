"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import SearchMag from "../icons/searchMag";

const Search = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: FormEvent) => {
    if (/^\s+$/.test(searchValue)) {
      return null;
    }
    const trimmedSearchValue = searchValue.trim();
    e.preventDefault();
    router.push(`/products?query=${trimmedSearchValue}`);
  };
  return (
    <form onSubmit={handleSearch} className="w-96">
      <Input
        variant="bordered"
        classNames={{
          base: "max-w-full",
          mainWrapper: "h-full",
          input: "text-small text-black",
          inputWrapper: "h-full font-normal text-black bg-transparent",
        }}
        color="danger"
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchMag />}
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
