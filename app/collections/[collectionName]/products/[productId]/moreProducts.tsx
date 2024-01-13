import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import products from "@/app/data/products";

const MoreProducts = () => {
  return (
    <>
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
    </>
  );
};

export default MoreProducts;
