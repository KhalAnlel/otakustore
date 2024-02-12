"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import colors from "../data/colors";
import sizes from "../data/sizes";
import axios from "axios";
import { VerticalDotsIcon } from "../icons/VerticalDotsIcon";
import { useRouter } from "next/navigation";

interface Props {
  products: {
    ProductColor: { product_id: number; color_id: number }[];
    ProductSize: { product_id: number; size_id: number }[];
    id: number;
    title: string;
    description: string;
    price: number;
    rate: number;
    stock: number;
    type: string;
    category: string;
    addedAt: Date;
  }[];
}

export default function ProductsTable({ products }: Props) {
  const router = useRouter();
  const handleDelete =async (id:number) =>{
    try{
      await axios.delete('/api/products/'+id)
      router.refresh();
    }catch(error){
      console.error('Error deleting products:', error);
    }
  }
  return (
    <Table aria-label="Example static collection table" className="overflow-auto" classNames={{wrapper:"rounded-none"}}>
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>RATE</TableColumn>
        <TableColumn>STOCK</TableColumn>
        <TableColumn>TYPE</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>COLORS</TableColumn>
        <TableColumn>SIZES</TableColumn>
        <TableColumn>ADDED AT</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => {
          const color_ids = product.ProductColor.map((color) => color.color_id);
          const size_ids = product.ProductSize.map((size) => size.size_id);
          const colorNames = color_ids.map((id) => colors[id - 1]).join(", ");
          const sizeNames = size_ids.map((id) => sizes[id - 1]).join(", ");
          return (
            <TableRow key={index}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rate}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{colorNames}</TableCell>
              <TableCell>{sizeNames}</TableCell>
              <TableCell>
                {product.addedAt.getFullYear() +
                  "/" +
                  product.addedAt.getMonth() +
                  1 +
                  "/" +
                  product.addedAt.getDay()}
              </TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="light" className="text-danger" size="sm">
                      <VerticalDotsIcon/>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="edit" href={"/dashboard/update/"+product.id}>Edit Product</DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete Product
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
