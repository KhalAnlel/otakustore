import React from "react";

const Quantity = () => {
  return (
    <div className="flex items-center gap-4 ">
      {" "}
      <span className="font-bold text-gray-700 ">Quantity:</span>
      <div className="flex w-fit items-center rounded border border-gray-200">
        <button
          type="button"
          className="h-8 w-10  text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value="1"
          className="h-8 w-16 dark:bg-gray-600 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="h-8 w-10  text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
