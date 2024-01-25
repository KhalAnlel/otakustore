"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import colors from "@/app/data/colors";
import sizes from "@/app/data/sizes";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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

     toast.success("Item Added successfully.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Send the data to the API
    await axios.patch(`/api/products/${product.id}`, data);
    router.push("/dashboard")
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-10"
    >
      <Input type="text" variant="bordered" {...register("title")} defaultValue={product.title} label="Title"/>
      <Input type="text" variant="bordered" {...register("description")} defaultValue={product.description} label="Description"/>
      <Input type="text" variant="bordered" {...register("price")} defaultValue={product.price.toString()} label="Price"/>
      <Input type="text" variant="bordered" {...register("rate")} defaultValue={product.rate.toString()} label="Rate"/>
      <Input type="text" variant="bordered" {...register("stock")} defaultValue={product.stock.toString()} label="Stock"/>
      <Input type="text" variant="bordered" {...register("type")} defaultValue={product.type} label="Type"/>
      <Input type="text" variant="bordered" {...register("category")} defaultValue={product.category} label="Category"/>
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

      <Button variant="bordered" className="text-danger hover:bg-danger hover:text-white" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UpdateForm;
