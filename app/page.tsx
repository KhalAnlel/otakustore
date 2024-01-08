import BestProducts from "./home/bestProducts";
import Collections from "./home/collections";
import HomeSlider from "./home/homeSlider";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <div className="p-20">
        <Collections />
        <BestProducts />
      </div>
    </div>
  );
}
