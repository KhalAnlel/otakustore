import React from "react";
import Breadcrumb from "../common/breadcrumb";
import collections from "../data/collections";
import Link from "next/link";
import { Image } from "@nextui-org/react";

const Collections = () => {
  return (
    <div className="p-5">
      <Breadcrumb />
      <h1 className="text-center text-2xl text-black font-bold my-10">
        All Collections
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {collections.map((collection, index) => (
            <div
              className="flex flex-col bg-gray-200 rounded-lg p-4 m-2"
              key={index}
            >
              <div className=" bg-white rounded-2xl">
                <Link href={"/collections/" + collection.title}>
                  <Image
                    isZoomed
                    width="100%"
                    className="h-52 rounded-sm"
                    src={collection.imgUrl}
                  />
                </Link>
              </div>
              <div className="flex flex-col items-start mt-4">
                <h4 className="w-full uppercase text-xl font-semibold text-black text-center hover:text-danger">
                  <Link href={`/collections/${collection.title}`}>
                    {collection.title}
                  </Link>
                </h4>
                <p className="text-sm text-black">
                  Some text about the thing that goes over a few lines.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
