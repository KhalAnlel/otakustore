import BestProducts from "./home/bestProducts";
import Collections from "./home/collections";
import HomeSlider from "./home/homeSlider";
import PopularProducts from "./home/popularProducts";
import ProductOfTheWeek from "./home/productOfTheWeek";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <div className="p-5 sm:p-10">
        <Collections />
        <BestProducts />
        <PopularProducts/>
        <ProductOfTheWeek/>
      </div>
    </div>
  );
}
