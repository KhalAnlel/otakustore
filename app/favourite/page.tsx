import React from "react";

const Favourite = () => {
  return (
    <div className="p-5">
      <div className="h-fit">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-4 dark:text-black">
            Shopping Cart
          </h1>

          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold dark:text-black">
                      Product
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Price
                    </th>
                    <th className="text-left font-semibold dark:text-black">
                      Action
                    </th>
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
                        <span className="font-semibold dark:text-black">
                          Product name
                        </span>
                      </div>
                    </td>
                    <td className="py-4 dark:text-black">$19.99</td>
                    <td className="py-4 dark:text-black"><button className="text-danger bg-transparent">Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
