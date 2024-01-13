"use client";
import React from "react";
import Breadcrumb from "@/app/common/breadcrumb";
import Quantity from "@/app/common/quantity";
import SelectColor from "@/app/common/selectColor";
import SelectSize from "@/app/common/selectSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import products from "@/app/data/products";

const Product = ({ params }: { params: { productId: string } }) => {
  return (
    <div className="bg-white py-8 ">
      <Breadcrumb />
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
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4 ">
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
              Product Id : {params.productId}
            </h2>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 ">Price: </span>
                <span className="text-gray-600 ">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Availability: </span>
                <span className="text-gray-600 ">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <SelectColor />
            </div>
            <div className="mb-4">
              <SelectSize />
            </div>
            <div className="mb-10 mt-10">
              <Quantity />
            </div>
            <div>
              <span className="font-bold text-gray-700 ">
                Product Description:
              </span>
              <p className="text-gray-600  text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 p-10">
        <p className="text-2xl font-bold mb-10">You may also like</p>
        <Swiper
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={7}
          initialSlide={3}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Card isFooterBlurred radius="lg" className="border-none w-52">
                <Link href={"/collections/collection/products/"}>
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={product.imgUrl}
                    width={200}
                  />
                </Link>
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Link
                    href={"/collections/animes/products/"}
                    className="text-tiny text-black font-bold hover:text-danger uppercase overflow-hidden"
                  >
                    {product.title}
                  </Link>
                  <Button
                    isDisabled
                    className="text-tiny disabled:text-black text-black font-bold bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    ${product.price}
                  </Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
