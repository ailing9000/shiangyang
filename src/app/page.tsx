import HeroBanner from "@/components/sections/HeroBanner";
import ValuesSection from "@/components/sections/ValuesSection";
import SuperfoodStrip from "@/components/sections/SuperfoodStrip";
import FeaturedDishes from "@/components/sections/FeaturedDishes";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ValuesSection />
      <SuperfoodStrip />
      <FeaturedDishes />
    </>
  );
}
