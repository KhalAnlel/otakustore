import BestProducts from "./home/bestProducts";
import HomeSlider from "./home/homeSlider";
import LogoClouds from "./home/logoClouds";
import PopularProducts from "./home/popularProducts";
import ProductOfTheWeek from "./home/productOfTheWeek";
import Promo from "./home/promo";
import TopCategories from "./home/topCategories";

export default function app() {
  return (
    <div>
      {/* <HomeSlider />
      <TopCategories />
      <BestProducts />
      <Promo />
      <PopularProducts />
      <ProductOfTheWeek /> */}
      <LogoClouds />
    </div>
  );
}
