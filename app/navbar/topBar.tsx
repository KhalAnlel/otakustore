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
  Avatar,
} from "@nextui-org/react";
import categories from "../data/categories";
import CartIcon from "../icons/cartIcon";
import FavIcon from "../icons/favIcon";
import { ThemeSwitcher } from "../common/themeSwitcher";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import DownArrow from "../icons/downArrow";
import logo from "../logo.jpeg";
import { useSession } from "next-auth/react";

const TopBar = () => {
  const { status, data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favItems = useSelector((state: RootState) => state.fav.items);

  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice = totalPrice + item.price * item.selectedQuantity;
  });

  const displayedCategories = categories.slice(0, 8);
  const otherCategories = categories.slice(8, 14);

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
          <Link
            href="/"
            className="font-bold text-black dark:text-white uppercase"
          >
            <img src={logo.src} width={"60px"} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        {status === "unauthenticated" && (

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        )}
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
                disabledKeys={["count", "price"]}
                className="max-h-72 overflow-auto"
              >
                <DropdownSection showDivider>
                  <DropdownItem key="count">
                    <span className="font-bold text-danger text-lg">
                      {cartItems.length} Items
                    </span>
                  </DropdownItem>
                  <DropdownItem key="price">
                    <span className="font-bold dark:text-white text-sm">
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
        {status === "authenticated" && (
          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src={session.user!.image!}
                  size="sm"
                  showFallback
                  name={session.user?.name!}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{session.user?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="dashboard" href="/dashboard">
                  Dashboard
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger" href="/api/auth/signout">
                  Log Out
                </DropdownItem>
                <DropdownItem key="Theme"> <ThemeSwitcher /></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
      <NavbarMenuItem key={"all"}>
            <Button
              className="hover:text-danger uppercase dark:text-white flex justify-start"
              variant="light"
              data-hover="transparent"
              data-focus="false"
              data-focus-visible="false"
            >
              <Link
                href={"/products"}
              >
                All Products
              </Link>
            </Button>
          </NavbarMenuItem>
        {displayedCategories.map((category, index) => (
          <NavbarMenuItem key={index}>
            <Button
              className="hover:text-danger uppercase dark:text-white flex justify-start"
              variant="light"
              data-hover="transparent"
              data-focus="false"
              data-focus-visible="false"
            >
              <Link
                href={"/products?query=" + category.title.toLocaleLowerCase()}
              >
                {category.title.toLocaleUpperCase()}
              </Link>
            </Button>
          </NavbarMenuItem>
        ))}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              className="w-6"
              startContent={<DownArrow />}
            >
              More
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {otherCategories.map((category, index) => (
              <DropdownItem key={index}>
                <Link
                  href={"/products?query=" + category.title.toLocaleLowerCase()}
                  className="hover:text-danger"
                >
                  {category.title.toLocaleUpperCase()}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
};

export default TopBar;
