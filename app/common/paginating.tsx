"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemsCount: number;
  pageSize: number;
}

const Paginating = ({ itemsCount, pageSize }: Props) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="mt-10 flex justify-center">
      <Pagination total={pageCount} page={1} onChange={(page) => changePage(page)} />
    </div>
  );
};

export default Paginating;
