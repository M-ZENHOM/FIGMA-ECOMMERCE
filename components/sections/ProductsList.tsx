import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ProductCard from "../product/ProductCard";
import { Tag } from "../ui/tag";
import { DummyProducts } from "@/config/dummyData";

export default function ProductsList() {
  return (
    <section className="pb-[192px]">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">
          <div className="pb-9 space-x-6">
            <Tag tagTitle="Featured" />
            <Tag tagTitle="Latest" Active={false} />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] max-sm:place-items-center">
          {DummyProducts.slice(4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
