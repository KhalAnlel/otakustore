"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import colors from '@/app/data/colors'
import sizes from '@/app/data/sizes'

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


const Add = () => {
  const { register, handleSubmit } = useForm<ItemForm>();
  const [selectedColors, setSelectedColors] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const onSubmit = async (data: ItemForm) => {
    // Convert price, rate, and stock to numbers
    data.price = parseInt(data.price as any);
    data.rate = parseInt(data.rate as any);
    data.stock = parseInt(data.stock as any);

    // Update the data with selected color_ids
    data.color_ids = selectedColors;
    data.size_ids = selectedSizes;

    // Send the data to the API
    await axios.post("/api/products", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-96 m-auto"
    >
      <label>Title</label>
      <input
        type="text"
        placeholder="title"
        {...register("title")}
        className="input rounded-md"
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="description"
        {...register("description")}
        className="input rounded-md"
      />
      <label>Price</label>
      <input
        type="number"
        placeholder="price"
        {...register("price")}
        className="input rounded-md"
      />
      <label>Rate</label>
      <input
        type="number"
        placeholder="rate"
        {...register("rate")}
        className="input rounded-md"
      />
      <label>Stock</label>
      <input
        type="number"
        placeholder="stock"
        {...register("stock")}
        className="input rounded-md"
      />
      <label>Type</label>
      <input
        type="text"
        placeholder="type"
        {...register("type")}
        className="input rounded-md"
      />
      <label>Category</label>
      <input
        type="text"
        placeholder="category"
        {...register("category")}
        className="input rounded-md"
      />
      <label>Colors</label>
      <div>
        <select
          data-te-select-init
          multiple
          onChange={(e) => {
            const selectedColorIds = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            setSelectedColors(selectedColorIds.map((id) => parseInt(id, 10)));
          }}
          value={selectedColors.map(String)}
        >
          {colors.map((color, index) => (
            <option key={index+1} value={String(index+1)}>
              {color}
            </option>
          ))}
        </select>
        <label data-te-select-label-ref>Select Colors</label>
      </div>
      <label>Sizes</label>
      <div>
        <select
          data-te-select-init
          multiple
          onChange={(e) => {
            const selectedSizeIds = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            setSelectedSizes(selectedSizeIds.map((id) => parseInt(id, 10)));
          }}
          value={selectedSizes.map(String)}
        >
          {sizes.map((size, index) => (
            <option key={index+1} value={String(index+1)}>
              {size}
            </option>
          ))}
        </select>
        <label data-te-select-label-ref>Select Sizes</label>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Add;
