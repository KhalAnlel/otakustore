import React from "react";
import CheckoutForm from "./checkoutForm";

const Checkout = () => {
  return (
    <div className="p-5">
      <div className="h-fit">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-4 dark:text-black">Shopping Cart</h1>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold dark:text-black">Product</th>
                      <th className="text-left font-semibold dark:text-black">Price</th>
                      <th className="text-left font-semibold dark:text-black">Quantity</th>
                      <th className="text-left font-semibold dark:text-black">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <span className="font-semibold dark:text-black">Product name</span>
                        </div>
                      </td>
                      <td className="py-4 dark:text-black">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2 dark:text-black">
                            -
                          </button>
                          <span className="text-center w-8 dark:text-black">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2 dark:text-black">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 dark:text-black">$19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full pb-4">
              <div className="flex flex-col-reverse sm:flex-row bg-white rounded-lg shadow-md p-6  gap-10 w-full">
                <CheckoutForm />
                <div className="p-6 w-6/12">

                <h2 className="text-lg font-semibold mb-4 dark:text-black">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Subtotal</span>
                  <span className="dark:text-black">$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Taxes</span>
                  <span className="dark:text-black">$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="dark:text-black">Shipping</span>
                  <span className="dark:text-black">$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-black">Total</span>
                  <span className="font-semibold  dark:text-black">$21.98</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
