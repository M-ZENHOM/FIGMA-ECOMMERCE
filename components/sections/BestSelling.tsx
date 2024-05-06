import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ProductCard from "../product/ProductCard";
import { DummyProducts } from "@/config/dummyData";

export default function BestSelling() {
  return (
    <section className="pb-24">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">
          <div className="pb-13">
            <span className="font-medium text-xs text-black-300">Shop Now</span>
            <h2 className="text-2xl font-bold">Best Selling</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] max-sm:place-items-center">
          {DummyProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
