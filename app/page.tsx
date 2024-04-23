import NewsLetter from "@/components/layouts/NewsLetter";
import BestSelling from "@/components/sections/BestSelling";
import CTACategory from "@/components/sections/CTACategory";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import ProductsList from "@/components/sections/ProductsList";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <BestSelling />
      <CTACategory />
      <ProductsList />
    </main>
  );
}
