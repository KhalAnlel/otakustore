import React from "react";

const ProductOfTheWeek = () => {
  return (
    <div className="mt-20">
      <div className="bg-white py-8 mt-20 sm:mt-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818"
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-danger hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-300 hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-black hover:text-white">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <span className="text-3xl font-semibold text-danger">
                Product of the Month!
              </span>
              <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Product Name
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Price:</span>
                  <span className="text-gray-600 ">$29.99</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfTheWeek;
