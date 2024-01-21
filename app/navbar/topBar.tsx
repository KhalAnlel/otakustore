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
import Search from "../common/search";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import DownArrow from "../icons/downArrow";


const TopBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favItems = useSelector((state: RootState) => state.fav.items);

  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += item.price;
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
            <Link href="/" className="font-bold text-black dark:text-white">
              LOGO
            </Link>
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
                disabledKeys={["count"]}
                className="max-h-72 overflow-auto"
              >
                <DropdownSection showDivider>
                  <DropdownItem key="count">
                    <span className="font-bold text-danger text-lg">
                      {favItems.length} Items
                    </span>
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
              <DropdownMenu
                aria-label="opening cart menu"
                closeOnSelect={false}
                disabledKeys={["count","price"]}
                className="max-h-72 overflow-auto"
              >
                <DropdownSection showDivider>
                  <DropdownItem key="count">
                    <span className="font-bold text-danger text-lg">
                      {cartItems.length} Items
                    </span>
                  </DropdownItem>
                  <DropdownItem key="price">
                    <span className="font-bold text-white text-sm">
                      Total Price: ${totalPrice}
                    </span>
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
