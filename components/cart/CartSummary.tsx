import React from "react";
import CartProduct from "./CartProduct";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CartSummary() {
  return (
    <div className="flex w-full justify-between pb-20 pt-10">
      <div>
        <h2 className="font-semibold text-base py-[18px] border-b border-white-200">
          Your cart
        </h2>
        <CartProduct {...DummyProducts[0]} />
      </div>
      <div className="w-full max-w-[341px]  h-full rounded-[4px] border border-white-100 p-6">
        <h2 className="font-semibold text-base ">Order Summary</h2>
        <div className="border-b border-black-100 gap-4 flex flex-col py-6 ">
          <p className="flex justify-between text-black-500 font-medium text-sm">
            SubTotal : <span className="text-black-900">$35.00</span>
          </p>
          <p className="flex justify-between text-black-500 font-medium text-sm">
            Shipping : <span className="text-black-900">Free</span>
          </p>
          <p className="flex justify-between text-black-500 font-medium text-sm">
            Tax : <span className="text-black-900">$3.00</span>
          </p>
        </div>
        <p className="flex justify-between text-black-900 font-medium text-sm py-6">
          Total : <span className="text-black-900">$100</span>
        </p>
        <Button className="w-full">Checkout</Button>
        <Link
          className="text-black-900 text-xs underline font-medium inline-flex items-center justify-center py-7 w-full"
          href="/products"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

const DummyProducts = [
  {
    id: 1,
    title: "Classic Monochrome Tees",
    size: "M",
    price: "$35.00",
    image: "/shirts/cover.png",
    color: "blue",
  },
  {
    id: 2,
    title: "Monochromatic Wardrobe",
    size: "XL",
    price: "$27.00",
    image: "/shirts/cover1.png",
    color: "yellow",
  },
];
