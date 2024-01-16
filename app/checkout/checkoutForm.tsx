"use client";
import React from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import cities from "../data/cities";
import { SelectorIcon } from "../icons/selectorIcon";

export default function CheckoutForm() {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-5  dark:text-black">Fill The Form</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4">
          <Input
            className=" dark:text-black"
            type="text"
            variant="bordered"
            label="First Name"
            isClearable
            required
          />
          <Input
            className=" dark:text-black"
            type="text"
            variant="bordered"
            label="Last Name"
            isClearable
            required
          />
        </div>
        <Input
          className=" dark:text-black"
          type="email"
          variant="bordered"
          label="Email"
          isClearable
          required
        />
        <Input
          className=" dark:text-black"
          type="text"
          variant="bordered"
          label="Phone Number"
          isClearable
          required
        />
        <Select
          placeholder="Select a city"
          labelPlacement="outside"
          className="max-w-s dark:text-black"
          variant="bordered"
          disableSelectorIconRotation
          selectorIcon={<SelectorIcon />}
          required
        >
          {cities.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </Select>
        <div className="flex gap-4">
          <Input
            className=" dark:text-black"
            type="text"
            variant="bordered"
            label="Address"
            isClearable
            required
          />
          <Input
            className=" dark:text-black"
            type="text"
            variant="bordered"
            label="Street, Block, House No."
            isClearable
            required
          />
        </div>
        <button className="bg-danger hover:opacity-65 text-white  py-2 px-4 rounded-lg mt-4 w-full">
          Submit and Buy!
        </button>
      </div>
    </div>
  );
}
