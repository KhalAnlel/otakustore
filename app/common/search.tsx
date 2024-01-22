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
    <form onSubmit={handleSearch}>
      <Input
        classNames={{
          base: "max-w-full md:max-w-[20rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-black bg-transparent dark:text-white border-1 dark:border-white border-slate-900",
        }}
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
