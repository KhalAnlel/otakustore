"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addFavItem } from "@/redux/features/favSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  productId: string;
}

const AddToFav = ({ productId }: Props) => {
  const dispatch = useDispatch();
  const handleAddToFav = () => {
    const item = { id: productId };
    dispatch(addFavItem(item));
    toast.success("Item Added successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <div className="w-1/2 px-2">
      <button
        onClick={handleAddToFav}
        className="w-full bg-gray-300 hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-black hover:text-white"
      >
        Add to Favourite
      </button>
    </div>
  );
};

export default AddToFav;
