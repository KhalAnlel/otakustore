"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Badge,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/react";
import categories from "../data/categories";
import CartIcon from "../icons/cartIcon";
import FavIcon from "../icons/favIcon";
import { ThemeSwitcher } from "../common/themeSwitcher";
import Search from "./search";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFavItem } from "@/redux/features/favSlice";
import { removeCartItem } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import DownArrow from "../icons/downArrow";
import { Product } from "@prisma/client";

interface Props {
  allProducts: Product[];
  images: {
    id: number;
    product_id: number;
    url: string;
  }[];
}

const TopBar = ({ allProducts, images }: Props) => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favItems = useSelector((state: RootState) => state.fav.items);

  const handleRemoveFromfav = (itemId: string) => {
    dispatch(removeFavItem(itemId));
  };

  const handleRemoveFromcart = (itemId: string) => {
    dispatch(removeCartItem(itemId));
  };

  const filteredFavItems = favItems.map((item) => {
    const favItem = allProducts.find(
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

  const filteredCartItems = cartItems.map((item) => {
    const cartItem = allProducts.find(
      (cartItem) => cartItem.id === parseInt(item.id)
    );
    const productImage = images.find(
      (image) => parseInt(item.id) === image.product_id
    );
    return {
      id: item.id,
      name: cartItem?.title || "",
      price: cartItem?.price || 0,
      productImage,
    };
  });

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-silver dark:bg-midnightblue"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-black dark:text-white"
        />
        <NavbarBrand>
          <p>
            <Link href="/" className="font-bold text-black dark:text-white">
              LOGO
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="hidden sm:flex gap-4" justify="center">
        <Search />
      </NavbarContent>
      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Badge
            color="danger"
            content={favItems.length}
            shape="circle"
            size="md"
          >
            <Dropdown>
              <DropdownTrigger>
                <button className="hover:opacity-50">
                  <FavIcon />
                </button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="opening fav menu"
                closeOnSelect={false}
                disabledKeys={["fav"]}
                className="max-h-72 overflow-auto"
              >
                <DropdownSection showDivider>
                  {favItems.length !== 0 ? (
                    filteredFavItems.map((product, index) => (
                      <DropdownItem key={index}>
                        <div className="flex flex-col divide-y divide-gray-200">
                          <div className="flex items-center py-4 px-6">
                            <img
                              className="w-16 h-16 object-cover rounded"
                              src={product.productImage?.url}
                              alt="Product Image"
                            />
                            <div className="mx-3">
                              <h3 className="text-gray-900 dark:text-white font-semibold w-32">
                                {product.name}
                              </h3>
                              <p className="text-gray-700 dark:text-white mt-1">
                                ${product.price}
                              </p>
                            </div>
                            <button
                              className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                              onClick={() =>
                                handleRemoveFromfav(product.id.toString())
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </DropdownItem>
                    ))
                  ) : (
                    <DropdownItem key={"fav"}>
                      <p className="text-center">No Items</p>{" "}
                    </DropdownItem>
                  )}
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem>
                    <Button variant="faded" className="w-full">
                      <Link
                        className="w-full text-center uppercase"
                        href="/favourite"
                      >
                        View All
                      </Link>
                    </Button>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge
            color="danger"
            content={cartItems.length}
            shape="circle"
            size="md"
          >
            <Dropdown>
              <DropdownTrigger>
                <button className="hover:opacity-50">
                  <CartIcon />
                </button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="opening cart menu"
                closeOnSelect={false}
                disabledKeys={["cart"]}
                className="max-h-72 overflow-auto"
              >
                <DropdownSection showDivider>
                  {cartItems.length !== 0 ? (
                    filteredCartItems.map((product, index) => (
                      <DropdownItem key={index}>
                        <div className="flex flex-col divide-y divide-gray-200">
                          <div className="flex items-center py-4 px-6">
                            <img
                              className="w-16 h-16 object-cover rounded"
                              src={product.productImage?.url}
                              alt="Product Image"
                            />
                            <div className="mx-3">
                              <h3 className="text-gray-900 dark:text-white font-semibold w-32">
                                {product.name}
                              </h3>
                              <p className="text-gray-700 dark:text-white mt-1">
                                ${product.price}
                              </p>
                            </div>
                            <button
                              className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                              onClick={() =>
                                handleRemoveFromcart(product.id.toString())
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </DropdownItem>
                    ))
                  ) : (
                    <DropdownItem key={"cart"}>
                      <p className="text-center"> No Items</p>
                    </DropdownItem>
                  )}
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem>
                    <Button variant="faded" className="w-full">
                      <Link
                        className="w-full text-center uppercase"
                        href="/checkout"
                      >
                        View All
                      </Link>
                    </Button>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="">
        {categories.map((category, index) => (
          <NavbarMenuItem key={index}>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="hover:text-danger uppercase dark:text-white"
                  variant="light"
                  data-hover="transparent"
                  data-focus="false"
                  data-focus-visible="false"
                  startContent={<DownArrow />}
                >
                  {category}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem className="text-black dark:bg-zinc-700">
                  Item
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-10">
          <Search />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default TopBar;
