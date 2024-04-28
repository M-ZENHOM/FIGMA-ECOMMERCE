import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ProductCard from "../product/ProductCard";
import { Tag } from "../ui/tag";

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
          {DummyProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

const DummyProducts = [
  {
    id: 1,
    title: "Elegant Ebony Sweatshirts",
    stock: "IN STOCK",
    price: "$35.00",
    image: "/shirts/shirt.png",
  },
  {
    id: 2,
    title: "Sleek and Cozy Black",
    stock: "IN STOCK",
    price: "$57.00",
    image: "/shirts/shirt2.png",
  },
  {
    id: 3,
    title: "Raw Black Tees",
    stock: "IN STOCK",
    price: "$19.00",
    image: "/shirts/shirt3.png",
  },
  {
    id: 4,
    title: "MOCKUP Black",
    stock: "IN STOCK",
    price: "$30.00",
    image: "/shirts/shirt4.png",
  },
];
