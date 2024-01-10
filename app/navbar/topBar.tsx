"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Badge,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import categories from "../data/categories";
import CartIcon from "../icons/cartIcon";
import FavIcon from "../icons/favIcon";
import { ThemeSwitcher } from "../components/themeSwitcher";
import Search from "./search";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-lightgray dark:bg-midnightblue"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-black dark:text-white"
        />
        <NavbarBrand>
          <p className="font-bold text-black dark:text-white">LOGO</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="hidden sm:flex gap-4" justify="center">
       <Search/>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Badge color="danger" content={0} shape="circle">
            <FavIcon />
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge color="danger" content={0} shape="circle">
            <CartIcon />
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-lightgray">
        {categories.map((category, index) => (
          <NavbarMenuItem key={index}>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="hover:text-blue-500"
                  variant="light"
                  data-hover="transparent"
                  data-focus="false"
                  data-focus-visible="false"
                  startContent={arrowDown}
                >
                  {category.toLocaleUpperCase()}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem className="text-black dark:bg-zinc-700">Item</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
        ))}
      <NavbarMenuItem className="mt-10">
        <Search/>
      </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default TopBar;
