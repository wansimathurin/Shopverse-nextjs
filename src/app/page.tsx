import { HeroComponent } from "@/components/HeroComponent";
import { MainArticles } from "@/components/MainArticles";
import { Navbar } from "@/components/Navbar";
import { PopularProducts } from "@/components/PopularProducts";
import { TrendingCategories } from "@/components/TrendingCategories";

const page = () => {
  return <div>
    <Navbar />
    <div className="px-10">
      <HeroComponent />
      <TrendingCategories />
      <MainArticles />
      <PopularProducts />
    </div>
  </div>;
}

export default page;