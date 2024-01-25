"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import colors from "@/app/data/colors";
import sizes from "@/app/data/sizes";
import { Button, Input } from "@nextui-org/react";
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

    await axios.patch(`/api/products/${product.id}`, data);
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-10"
    >
      <h1 className="font-bold text-xl text-center text-black">Update Product</h1>
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("title")}
        defaultValue={product.title}
        label="Title"
        isRequired
        className="text-black"
      />
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("description")}
        defaultValue={product.description}
        label="Description"
        isRequired
        className="text-black"
      />
      <Input
        type="number"
        color="danger"
        variant="bordered"
        {...register("price")}
        defaultValue={product.price.toString()}
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
        defaultValue={product.rate.toString()}
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
        defaultValue={product.stock.toString()}
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
        defaultValue={product.type}
        label="Type"
        isRequired
        className="text-black"
      />
      <Input
        type="text"
        color="danger"
        variant="bordered"
        {...register("category")}
        defaultValue={product.category}
        label="Category"
        isRequired
        className="text-black"
      />
      <label className="font-bold text-black">Select Colors</label>
      <div className="h-96 overflow-auto flex flex-col gap-1 bg-gray-200 p-2 rounded-lg">
        {colors.map((color, index) => (
          <div>
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
            <label htmlFor={color} className="text-black"> {color}</label>
          </div>
        ))}
      </div>
      <label className="font-bold text-black">Select Sizes</label>
      <div className="h-48 overflow-auto flex flex-col gap-1 bg-gray-200 p-2 rounded-lg">
        {sizes.map((size, index) => (
          <div>
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
            <label htmlFor={size} className="text-black"> {size}</label>
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

export default UpdateForm;
