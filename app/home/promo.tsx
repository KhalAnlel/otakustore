import Link from "next/link";
import React from "react";

const Promo = () => {
  return (
    <div className="relative overflow-hidden bg-white mt-20">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Otaku Store - Your Anime Haven!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Indulge your passion for anime with our extensive and carefully curated collection. From classic series to the latest releases, we have got it all. Whether you are a seasoned otaku or just starting your anime journey, Otako Store is your one-stop destination for all things anime.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://m.media-amazon.com/images/I/610PmGC-3XS._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/610PmGC-3XS._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/81RP8T0X4DL._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/81RP8T0X4DL._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/61B6JAft5-L._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/61B6JAft5-L._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/81c6Mt0J4gL._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/81c6Mt0J4gL._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/71KISOAkb6L._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/71KISOAkb6L._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/71iCdR5Nv3L._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/71iCdR5Nv3L._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://m.media-amazon.com/images/I/617XVQ69eyS._AC_UL480_FMwebp_QL65_.jpg"
                          alt="https://m.media-amazon.com/images/I/617XVQ69eyS._AC_UL480_FMwebp_QL65_.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/products"
                className="bg-danger hover:bg-gray-800 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white"
              >
                Check Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
