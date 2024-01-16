import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "@/redux/features/cartSlice";

interface Props {
  productId: string;
  price: number;
  selectedColor: string;
  selectedSize: string;
  selectedQuantity: number;
}

const AddToCart = ({
  productId,
  price,
  selectedColor,
  selectedSize,
  selectedQuantity,
}: Props) => {
  const dispatch = useDispatch();

  const finalPrice = price * selectedQuantity;

  const handleAddToCart = () => {
    const item = {
      id: productId,
      price: finalPrice,
      selectedColor,
      selectedSize,
      selectedQuantity,
    };
    dispatch(addItem(item));

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
        onClick={handleAddToCart}
        className="w-full bg-danger hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
