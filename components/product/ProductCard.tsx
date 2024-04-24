import Image from "next/image";
import React from "react";
import { Tag } from "../ui/tag";

interface CardProps {
  image: string;
  title: string;
  price: string;
  stock: string;
}
export default function ProductCard({ ...product }: CardProps) {
  return (
    <div className="w-[256px] h-[434px]">
      <div className="bg-white-100 rounded-[4px] w-[237px] h-[312px]">
        <Image
          src={product.image}
          alt={product.title}
          width={237}
          height={312}
        />
        <h2 className="text-sm font-medium pb-4 pt-6">{product.title}</h2>
        <div className="flex items-center gap-5">
          <Tag tagTitle={product.stock} className="text-xs" />
          <p className="text-black-600 text-sm">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
