import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ProductCard from "./ProductCard";

export default function SimilarProduct() {
  return (
    <section className="pb-20">
      <div className="pb-10">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <span className="font-medium text-xs text-black-300">Shop Now</span>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {DummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

const DummyProducts = [
  {
    id: 1,
    title: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "$35.00",
    image: "/shirts/cover.png",
  },
  {
    id: 2,
    title: "Monochromatic Wardrobe",
    stock: "IN STOCK",
    price: "$27.00",
    image: "/shirts/cover1.png",
  },
  {
    id: 3,
    title: "Essential Neutrals",
    stock: "IN STOCK",
    price: "$22.00",
    image: "/shirts/cover2.png",
  },
  {
    id: 4,
    title: "UTRAANET Black",
    stock: "IN STOCK",
    price: "$43.00",
    image: "/shirts/cover3.png",
  },
];
