"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import categories from "../data/categories";
import animeList from "@/app/data/animeList";

export default function Filters() {
  return (
    <Accordion className="dark:text-black" defaultExpandedKeys={["1"]}>
      <AccordionItem
        key="1"
        aria-label="Collections"
        className="gap-2"
        title={<h1 className="text-black">Collections</h1>}
      >
            <Link
              href={"/products"}
              className="uppercase ml-3 text-black text-sm hover:text-danger"
            >
              All
            </Link>
        {categories.map((category, index) => (
          <div key={index}>

            <Link
              href={"/products?query=" + category}
              className="uppercase ml-3 text-black text-sm hover:text-danger"
            >
              {category}
            </Link>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Animes"
        className="gap-2"
        title={<h1 className="text-black">Animes</h1>}
      >
        {animeList.map((anime, index) => (
          <div key={index}>
            <Link
              href={"/products?query=" + anime}
              className="uppercase  ml-3 text-black text-sm hover:text-danger"
            >
              {anime}
            </Link>
          </div>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
