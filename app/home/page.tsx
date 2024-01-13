import React from "react";
import BestProducts from "./bestProducts";
import HomeSlider from "./homeSlider";
import PopularProducts from "./popularProducts";
import ProductOfTheWeek from "./productOfTheWeek";
import TopCollections from "./topCollections";
import LogoClouds from "./logoClouds";
import Promo from "./promo";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <TopCollections />
      <BestProducts />
      <Promo />
      <PopularProducts />
      <ProductOfTheWeek />
      <LogoClouds />
    </div>
  );
};

export default Home;
