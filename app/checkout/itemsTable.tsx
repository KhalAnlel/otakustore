"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux";
import { removeCartItem } from "@/redux/features/cartSlice";
import Link from "next/link";
import CheckoutForm from "./checkoutForm";

interface Props {
  cartItems: Product[];
  images: { id: number; product_id: number; url: string }[];
}

const ItemsTable = ({ cartItems, images }: Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const filteredItems = items.map((item) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.id === parseInt(item.id)
    );
    const productImage = images.find(
      (image) => parseInt(item.id) === image.product_id
    );
    return {
      id: item.id,
      name: cartItem?.title || "",
      price: item.price,
      selectedColor: item.selectedColor,
      selectedSize: item.selectedSize,
      quantity: item.selectedQuantity,
      productImage,
    };
  });

  let totalPrice = 0;
  filteredItems.map((item) => {
    totalPrice += item.price;
  });

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeCartItem(itemId));
  };

  return (
    <div>
      {filteredItems.length === 0 ? (
        <div className="flex items-center flex-col p-28">
          <p className="text-black text-2xl">Cart is empty</p>
          <Link href={"/products"} className="text-black hover:text-primary">
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
                      Quantity
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Total
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4 object-contain"
                            src={item.productImage?.url}
                            alt="Product image"
                          />
                          <Link href={"/products/" + item.id}>
                            <span className="font-semibold dark:text-black">
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td className="py-4 dark:text-black">${item.price}</td>
                      <td className="py-4 dark:text-black">{item.quantity}</td>
                      <td className="py-4 dark:text-black">${item.price}</td>
                      <td className="py-4 dark:text-black">
                        <span
                          className="text-danger hover:cursor-pointer hover:opacity-65"
                          onClick={() =>
                            handleRemoveFromCart(item.id.toString())
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
          <div className="w-full pb-4">
            <div className="flex flex-col-reverse sm:flex-row bg-white rounded-lg shadow-md p-6  gap-10 w-full">
              <CheckoutForm />
              <div className="p-6 w-6/12">
                <h2 className="text-lg font-semibold mb-4 dark:text-black">
                  Summary
                </h2>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Subtotal</span>
                  <span className="dark:text-black">${totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Taxes</span>
                  <span className="dark:text-black">$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Shipping</span>
                  <span className="dark:text-black">$3.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-black">Total</span>
                  <span className="font-semibold  dark:text-black">
                    ${totalPrice + 3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsTable;
