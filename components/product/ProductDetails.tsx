import React from "react";
import { Icons } from "../Icons";
import { Tag } from "../ui/tag";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import AddToCartBtn from "../cart/AddToCartBtn";
interface ProductDetailsProps {
  id: number;
  title: string;
  rate: number;
  stock: number;
  reviews: number;
  price: string;
  image: string;
  colors: string[];
  sizes: string[];
  activeColor: string;
}

export default function ProductDetails({
  id,
  title,
  rate,
  reviews,
  price,
  stock,
  colors,
  sizes,
  image,
  activeColor,
}: ProductDetailsProps) {
  return (
    <div className="max-sm:max-w-[350px] md:w-[534px] md:h-[574px] h-[400px] pt-1 pb-3">
      <div className="flex justify-between items-center">
        <h2 className="pb-4 text-black-900 font-bold text-2xl">{title}</h2>
        <Icons.Share className="cursor-pointer w-6 h-6" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-[167px] h-[28px] inline-flex items-center justify-center font-medium text-xs text-black-500 bg-white-100 rounded-full">
          <Icons.Star className="w-5 h-5" /> {rate} — {reviews} Reviews
        </span>
        <Tag
          tagTitle={stock > 0 ? "In Stock" : "Out of Stock"}
          className="text-xs font-medium"
        />
      </div>
      <p className="text-lg font-semibold pt-6 pb-7">${price}</p>
      <div className="pb-5">
        <h2 className="uppercase font-medium text-xs text-black-500">
          Available Colors
        </h2>
        <div className="flex items-center gap-3 py-[10px]">
          {colors.map((color) => (
            <span
              key={color}
              className={cn(
                "relative group w-6 h-6 rounded-full inline-block bg-blue-900 cursor-pointer",
                color === "blue" && "bg-blue-900",
                color === "yellow" && "bg-yellow-900",
                color === "green" && "bg-green-900"
              )}
            >
              {color === activeColor && (
                <span className="absolute -top-1 -left-1 border border-black-900 w-7 h-7 rounded-full" />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="pb-7">
        <h2 className="uppercase font-medium text-xs text-black-500">
          Select Size
        </h2>
        <div className="flex items-center gap-3 py-[10px]">
          {sizes.map((size) => (
            <Button key={size} variant="boxSize" size="boxSize">
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div className="pb-8">
        <h2 className="uppercase font-medium text-xs text-black-500 pb-[10px]">
          Quantity
        </h2>
        <div className="flex items-center justify-between gap-3 w-[164px] h-[44px] border border-black-100 rounded-[4px] px-5 py-4">
          <Icons.Minus className="cursor-pointer" />
          <p>1</p>
          <Icons.Add className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-5 pb-4">
          <AddToCartBtn
            item={{
              id,
              title,
              price,
              image: image,
              color: "blue",
              size: "M",
              quantity: 1,
            }}
          />
          <Button size="icon" variant="outline">
            <Icons.Heart />
          </Button>
        </div>
        <p className="text-black-500 text-xs font-medium py-1">
          — Free shipping on orders $100+
        </p>
      </div>
    </div>
  );
}
