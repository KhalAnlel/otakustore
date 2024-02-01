"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import colors from "@/app/data/colors";
import sizes from "@/app/data/sizes";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ItemForm {
  title: string;
  description: string;
  price: number;
  rate: number;
  stock: number;
  type: string;
  category: string;
  color_ids: number[];
  size_ids: number[];
}
const AddForm = () => {
  const { register, handleSubmit } = useForm<ItemForm>();
  const [selectedColors, setSelectedColors] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const isSubmitDisabled =
    selectedColors.length === 0 || selectedSizes.length === 0;

  const onSubmit = async (data: ItemForm) => {
    data.price = parseInt(data.price as any, 10);
    data.rate = parseInt(data.rate as any, 10);
    data.stock = parseInt(data.stock as any, 10);
    data.color_ids = selectedColors;
    data.size_ids = selectedSizes;

    toast.success("Item Updated Successfully.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    await axios.post("/api/products", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-10"
    >
      <h1 className="font-bold text-xl text-center text-black">
        Update Product
      </h1>
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("title")}
        label="Title"
        isRequired
        className="text-black"
      />
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("description")}
        label="Description"
        isRequired
        className="text-black"
      />
      <Input
        type="number"
        color="danger"
        variant="bordered"
        {...register("price")}
        label="Price"
        isRequired
        min={1}
        className="text-black"
      />
      <Input
        type="number"
        color="danger"
        variant="bordered"
        {...register("rate")}
        label="Rate"
        isRequired
        min={1}
        max={5}
        className="text-black"
      />
      <Input
        type="number"
        color="danger"
        variant="bordered"
        {...register("stock")}
        label="Stock"
        isRequired
        min={1}
        className="text-black"
      />
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("type")}
        label="Type"
        isRequired
        className="text-black"
      />
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("category")}
        label="Category"
        isRequired
        className="text-black"
      />
      <label className="font-bold text-black">Select Colors</label>
      <div className="h-96 overflow-auto flex flex-col gap-1 bg-gray-200 p-2 rounded-lg">
        {colors.map((color, index) => (
          <div key={index}>
            <input
              type="checkbox"
              key={index + 1}
              value={color}
              id={color}
              checked={selectedColors.includes(index + 1)}
              onChange={(e) => {
                const checked = e.target.checked;
                const colorId = index + 1;

                if (checked) {
                  setSelectedColors((prevColors) => [...prevColors, colorId]);
                } else {
                  setSelectedColors((prevColors) =>
                    prevColors.filter((id) => id !== colorId)
                  );
                }
              }}
            />
            <label htmlFor={color} className="text-black">
              {" "}
              {color}
            </label>
          </div>
        ))}
      </div>
      <label className="font-bold text-black">Select Sizes</label>
      <div className="h-48 overflow-auto flex flex-col gap-1 bg-gray-200 p-2 rounded-lg">
        {sizes.map((size, index) => (
          <div key={index}>
            <input
              type="checkbox"
              key={index + 1}
              value={size}
              id={size}
              checked={selectedSizes.includes(index + 1)}
              onChange={(e) => {
                const checked = e.target.checked;
                const sizeId = index + 1;
                if (checked) {
                  setSelectedSizes((prevSizes) => [...prevSizes, sizeId]);
                } else {
                  setSelectedSizes((prevSizes) =>
                    prevSizes.filter((id) => id !== sizeId)
                  );
                }
              }}
            />
            <label htmlFor={size} className="text-black">
              {" "}
              {size}
            </label>
          </div>
        ))}
      </div>
      <Button
        variant="bordered"
        className="text-danger hover:bg-danger hover:text-white disabled:cursor-not-allowed disabled:hover:bg-slate-800"
        type="submit"
        disabled={isSubmitDisabled}
      >
        {!isSubmitDisabled ? "Submit" : "Make Sure You Selected Color or Size"}
      </Button>
    </form>
  );
};

export default AddForm;
