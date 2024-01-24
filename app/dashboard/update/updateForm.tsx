"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import colors from "@/app/data/colors";
import sizes from "@/app/data/sizes";

interface Props {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    rate: number;
    stock: number;
    type: string;
    category: string;
    color_ids: number[];
    size_ids: number[];
  };
}

interface ItemForm extends Omit<Props["product"], "id"> {
  color_ids: number[];
  size_ids: number[];
}
// ... Other imports

const UpdateForm: React.FC<Props> = ({ product }) => {
  const { register, handleSubmit, setValue } = useForm<ItemForm>();
  const [selectedColors, setSelectedColors] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  useEffect(() => {
    // Initialize form values when the component mounts
    setValue("title", product.title);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("rate", product.rate);
    setValue("stock", product.stock);
    setValue("type", product.type);
    setValue("category", product.category);
    setSelectedColors(product.color_ids);
    setSelectedSizes(product.size_ids);
  }, [product, setValue]);

  const onSubmit = async (data: ItemForm) => {
    // Convert relevant form values to numbers
    data.price = parseInt(data.price as any, 10);
    data.rate = parseInt(data.rate as any, 10);
    data.stock = parseInt(data.stock as any, 10);

    // Update form data with selected color_ids and size_ids
    data.color_ids = selectedColors;
    data.size_ids = selectedSizes;

    // Send the data to the API
    await axios.patch(`/api/products/${product.id}`, data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-96 m-auto"
    >
      <label>Title</label>
      <input type="text" {...register("title")} className="input rounded-md" />

      <label>Description</label>
      <input
        type="text"
        {...register("description")}
        className="input rounded-md"
      />

      <label>Price</label>
      <input
        type="number"
        {...register("price")}
        className="input rounded-md"
      />

      <label>Rate</label>
      <input type="number" {...register("rate")} className="input rounded-md" />

      <label>Stock</label>
      <input
        type="number"
        {...register("stock")}
        className="input rounded-md"
      />

      <label>Type</label>
      <input type="text" {...register("type")} className="input rounded-md" />

      <label>Category</label>
      <input
        type="text"
        {...register("category")}
        className="input rounded-md"
      />

      {/* Colors Multi-Select */}
      <div>
        <select
          data-te-select-init
          multiple
          onChange={(e) => {
            const selectedColorIds = Array.from(
              e.target.selectedOptions,
              (option) => parseInt(option.value, 10)
            );
            setSelectedColors(selectedColorIds);
          }}
          value={selectedColors.map(String)}
        >
          {colors.map((color, index) => (
            <option key={index + 1} value={index + 1}>
              {color}
            </option>
          ))}
        </select>
        <label>Select Colors</label>
      </div>

      {/* Sizes Multi-Select */}
      <div>
        <select
          data-te-select-init
          multiple
          onChange={(e) => {
            const selectedSizeIds = Array.from(
              e.target.selectedOptions,
              (option) => parseInt(option.value, 10)
            );
            setSelectedSizes(selectedSizeIds);
          }}
          value={selectedSizes.map(String)}
        >
          {sizes.map((size, index) => (
            <option key={index + 1} value={index + 1}>
              {size}
            </option>
          ))}
        </select>
        <label>Select Sizes</label>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UpdateForm;
