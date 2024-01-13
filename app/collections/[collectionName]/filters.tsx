'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from "next/link";
import collections from "@/app/data/collections";
import animeList from "@/app/data/animeList";


export default function Filters() {
  return (
    <Accordion className="dark:text-black" defaultExpandedKeys={["1"]}>
      <AccordionItem key="1" aria-label="Collections" className="gap-2" title={<h1 className="text-black">Collections</h1>}>
        {collections.map((collection,index)=>(
          <div key={index}>
            <Link href={"/collections/"+collection.title} className="uppercase ml-3 text-black text-sm hover:text-danger">{collection.title}</Link>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Animes" className="gap-2" title={<h1 className="text-black">Animes</h1>}>
        {animeList.map((anime,index)=>(
          <div key={index}>
            <Link href={"/collections/"+anime} className="uppercase  ml-3 text-black text-sm hover:text-danger">{anime}</Link>
          </div>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
