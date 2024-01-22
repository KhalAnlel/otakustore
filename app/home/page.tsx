import React from "react";
import BestProducts from "./bestProducts";
import HomeSlider from "./homeSlider";
import PopularProducts from "./popularProducts";
import ProductOfTheWeek from "./productOfTheWeek";
import LogoClouds from "./logoClouds";
import Promo from "./promo";
import TopCategories from "./topCategories";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <TopCategories />
      <BestProducts />
      <Promo />
      <PopularProducts />
      <ProductOfTheWeek />
      <LogoClouds />
    </div>
  );
};

export default Home;
