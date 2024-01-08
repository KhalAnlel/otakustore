import BestProducts from "./home/bestProducts";
import Collections from "./home/collections";
import HomeSlider from "./home/homeSlider";

export default function Home() {
  return (
    <div className="bg-primary dark:bg-primary">
      <HomeSlider/>
      <Collections/>
      <BestProducts/>
    </div>
  )
}