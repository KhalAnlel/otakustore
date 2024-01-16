"use client";
import React, { useState } from "react";
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
import Cart from "../common/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clearFav } from "@/redux/features/favSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const TopBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favItems = useSelector((state: RootState) => state.fav.items);

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
              <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
                <DropdownSection showDivider>
                  <DropdownItem
                    key="cart_product"
                    className="max-h-52 overflow-auto"
                  >
                    <Cart />
                  </DropdownItem>
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
              <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
                <DropdownSection showDivider>
                  <DropdownItem
                    key="cart_product"
                    className="max-h-52 overflow-auto"
                  >
                    <Cart />
                  </DropdownItem>
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
                  startContent={arrowDown}
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
