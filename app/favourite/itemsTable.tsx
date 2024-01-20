"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";
import { removeFavItem } from "@/redux/features/favSlice";
import Link from "next/link";

interface Props {
  products: Product[];
  images: { id: number; product_id: number; url: string }[];
}
const ItemsTable = ({ products, images }: Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.fav.items);

  const filteredItems = items.map((item) => {
    const favItem = products.find(
      (favItem) => favItem.id === parseInt(item.id)
    );
    const productImage = images.find(
      (image) => parseInt(item.id) === image.product_id
    );
    return {
      id: item.id,
      name: favItem?.title || "",
      price: favItem?.price || 0,
      productImage,
    };
  });
  const handleRemoveFromfav = (itemId: string) => {
    dispatch(removeFavItem(itemId));
  };

  return (
    <div>
      {filteredItems.length === 0 ? (
        <div className="flex items-center flex-col p-28">
          <p className="text-black text-2xl">Cart is empty</p>
          <Link
            href={"/collections/all"}
            className="text-black hover:text-primary"
          >
            Try To Add
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold dark:text-black">
                      Product
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Price
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item,index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <Link href={"/collections/all/products/" + item.id}>
                            <span className="font-semibold dark:text-black">
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td className="py-4 dark:text-black">${item.price}</td>
                      <td className="py-4 dark:text-black">
                        <span
                          className="text-danger hover:cursor-pointer hover:opacity-65"
                          onClick={() =>
                            handleRemoveFromfav(item.id.toString())
                          }
                        >
                          Remove
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsTable;
