"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useContext } from "react";
import { Icons } from "../Icons";
import { CartContext, CartItem } from "@/context/CartContext";

interface ProductProps {
  className?: string;
  cartProducts: CartItem[];
}
export default function CartProduct({ className, cartProducts }: ProductProps) {
  const { removeFromCart, itemQuantity } = useContext(CartContext);
  return (
    <>
      {cartProducts.map((product) => (
        <div
          className={cn(
            "w-full flex flex-wrap max-sm:justify-center max-sm:py-4 items-center",
            className
          )}
        >
          <div className="flex items-center">
            <Image
              src={product.image}
              alt={product.title}
              width={80}
              height={80}
            />
            <div className="space-y-2 pl-6 pr-16">
              <h2 className="text-sm font-medium  max-sm:text-center w-[200px]">
                {product.title}
              </h2>
              <div className="flex items-center max-sm:justify-center gap-3 text-xs font-medium text-black-500">
                <div className="flex items-center gap-3">
                  Color :
                  <span
                    className={cn("rounded-full w-4 h-4", {
                      "bg-blue-900": product.color === "blue",
                      "bg-yellow-900": product.color === "yellow",
                      "bg-green-900": product.color === "green",
                    })}
                  />
                </div>
                {"—"}
                <span>Size : {product.size}</span>
              </div>
            </div>
          </div>
          <p className="text-black-600 text-sm pr-7">${product.price}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-between gap-3 w-[107px] h-[40px] border border-black-100 rounded-[4px] px-5 py-4">
              <Icons.Minus
                onClick={() => itemQuantity(product, "decrease")}
                className="cursor-pointer"
              />
              <p>{product.quantity}</p>
              <Icons.Add
                onClick={() => itemQuantity(product, "increase")}
                className="cursor-pointer"
              />
            </div>
            <span
              onClick={() => removeFromCart(product)}
              className="inline-flex  items-center justify-center w-8 h-8 rounded-[4px] bg-white-100 cursor-pointer hover:bg-red-800 transition-all duration-300"
            >
              <Icons.X />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
