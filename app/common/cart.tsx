import React from "react";

const Cart = () => {
  return (
    <div className="flex flex-col divide-y divide-gray-200">
      <div className="flex items-center py-4 px-6">
        <img
          className="w-16 h-16 object-cover rounded"
          src="https://dummyimage.com/100x100/F3F4F7/000000.jpg"
          alt="Product Image"
        />
        <div className="mx-3">
          <h3 className="text-gray-900 dark:text-white font-semibold w-32">Product Name</h3>
          <p className="text-gray-700 dark:text-white mt-1">$9.99</p>
        </div>
        <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
