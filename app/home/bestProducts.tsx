import { Button, Link } from "@nextui-org/react";
import React from "react";

const list = [
  {
    id: 1,
    title: "One Piece Thousand Sunny Grand Ship Model Kit",
    img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
    price: "$13.00",
  },
  {
    id: 2,
    title: "BTS TinyTAN Nendoroid | Good Smile No.1807 Jung Kook",
    img: "https://otakusshop.com/cdn/shop/files/61DWIrXsklL._AC_SL1500_600x.jpg?v=1704382568",
    price: "$3.00",
  },
  {
    id: 3,
    title: "Banpresto Demon Slayer: Kimetsu No Yaiba Vol.19 Tanjiro Kamado Figure",
    img: "https://otakusshop.com/cdn/shop/files/51anSeVC3yL._AC_SL1281_500x.jpg?v=1703626585",
    price: "$3.00",
  },
  {
    id: 4,
    title: "One Piece Thousand Sunny Grand Ship Model Kit",
    img: "https://otakusshop.com/cdn/shop/files/img_304920_8e775af58a910d2ba260a0ea8dc8ceea_1_600x.jpg?v=1704383818",
    price: "$13.00",
  },
  {
    id: 5,
    title: "BTS TinyTAN Nendoroid | Good Smile No.1807 Jung Kook",
    img: "https://otakusshop.com/cdn/shop/files/61DWIrXsklL._AC_SL1500_600x.jpg?v=1704382568",
    price: "$3.00",
  },
  {
    id: 6,
    title: "Banpresto Demon Slayer: Kimetsu No Yaiba Vol.19 Tanjiro Kamado Figure",
    img: "https://otakusshop.com/cdn/shop/files/51anSeVC3yL._AC_SL1281_500x.jpg?v=1703626585",
    price: "$3.00",
  },

];

const arrowLift = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const BestProducts = () => {
  return (
    <div className="flex flex-col mt-20 p-10">
      <div className="flex items-center justify-between">
        <span className="text-black dark:text-white text-xl font-semibold">
          Best Products This Month
        </span>
        <Button color="danger" endContent={arrowLift}>
          View All
        </Button>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto mt-10">
        {list.map((item, index) => (
          <div className="w-full h-44 flex bg-white border-1 items-center p-5 gap-4" key={index}>
            <img src={item.img} className="w-24 h-24" />
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-sm font-semibold text-black line-clamp-2 w-11/12 hover:text-red-800">{item.title}</Link>
              <span  className="text-xl  text-red-800">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
