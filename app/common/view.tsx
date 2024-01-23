"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SquareIcon from "../icons/squareIcon";
import ListIcon from "../icons/listIcon";

const View = () => {
  const [value, setValue] = useState("grid");
  const router = useRouter();
  const searchParams = useSearchParams();
  const changeItems = (items: string) => {
    const params = new URLSearchParams(searchParams);
    setValue(items);
    params.set("view", items.toString());
    router.push("?" + params.toString());
  };
  return (
    <div className="flex gap-2 items-center text-black px-4">
      View:
      <button
        className={`hover:text-danger ${value === "grid" ? "text-danger" : ""}`}
        onClick={() => changeItems("grid")}
      >
        <SquareIcon />
      </button>
      <button
        className={`hover:text-danger ${value === "list" ? "text-danger" : ""}`}
        onClick={() => changeItems("list")}
      >
        <ListIcon />
      </button>
    </div>
  );
};

export default View;
