import Image from "next/image";
import React from "react";
import { Tag } from "../ui/tag";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  stock: number;
  className?: string;
}
export default function ProductCard({ className, ...product }: CardProps) {
  return (
    <div className={cn("w-[256px] h-[434px]", className)}>
      <div className="bg-white-100 rounded-[4px] w-[237px] h-[312px] overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            className="hover:scale-125 transition-all duration-300"
            src={product.image}
            alt={product.title}
            width={237}
            height={312}
          />
        </Link>
      </div>
      <h2 className="text-sm font-medium pb-4 pt-6 max-sm:text-center">
        {product.title}
      </h2>
      <div className="flex items-center max-sm:justify-center gap-5">
        <Tag
          tagTitle={product.stock > 0 ? "In Stock" : "Out of Stock"}
          className="text-xs"
        />
        <p className="text-black-600 text-sm">{product.price}</p>
      </div>
    </div>
  );
}
