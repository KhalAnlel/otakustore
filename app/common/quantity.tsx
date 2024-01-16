import React from "react";

interface Props {
  stock?: number;
  selectedQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const Quantity = ({ stock, selectedQuantity, onQuantityChange }: Props) => {
  const handleDecrement = () => {
    onQuantityChange(Math.max(selectedQuantity - 1, 1));
  };

  const handleIncrement = () => {
    onQuantityChange(Math.min(selectedQuantity + 1, stock||1));
  };
  return (
    <div className="flex items-center gap-4 ">
      <span className="font-bold text-gray-700 ">Quantity:</span>
      <div className="flex w-fit items-center rounded border border-gray-200">
        <button
          type="button"
          id="decrement-button"
          className="h-8 w-10  text-gray-600 transition hover:opacity-75"
          onClick={handleDecrement}
          data-input-counter-decrement="quantity-input"
        >
          &minus;
        </button>

        <input
          type="text"
          id="quantity-input"
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max={stock}
          placeholder="1"
          value={selectedQuantity}
          required
          className="h-8 w-16 dark:bg-gray-600 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          type="button"
          id="increment-button"
          className="h-8 w-10  text-gray-600 transition hover:opacity-75"
          onClick={handleIncrement}
          data-input-counter-increment="quantity-input"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
