"use client";
import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import { Button } from "../ui/button";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

export default function CartSummary() {
  const { cart: cartProducts, totalPrice } = useContext(CartContext);
  let tax = 3;
  const productQuantity = cartProducts
    .map((product) => product.quantity)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="flex w-full justify-between pb-20 pt-10">
      <div>
        <h2 className="font-semibold text-base py-[18px] border-b border-white-200">
          Your cart
        </h2>
        <CartProduct cartProducts={cartProducts} />
      </div>
      <div className="w-full max-w-[341px]  h-full rounded-[4px] border border-white-100 p-6">
        <h2 className="font-semibold text-base ">Order Summary</h2>
        <div className="border-b border-black-100 gap-4 flex flex-col py-6 ">
          <p className="flex justify-between text-black-500 font-medium text-sm">
            SubTotal :<span className="text-black-900">${totalPrice()}</span>
          </p>
          <p className="flex justify-between text-black-500 font-medium text-sm">
            Quantity : <span className="text-black-900">{productQuantity}</span>
          </p>
          <p className="flex justify-between text-black-500 font-medium text-sm">
            Shipping : <span className="text-black-900">Free</span>
          </p>
          <p className="flex justify-between text-black-500 font-medium text-sm">
            Tax : <span className="text-black-900">${tax}</span>
          </p>
        </div>
        <p className="flex justify-between text-black-900 font-medium text-sm py-6">
          Total :
          <span className="text-black-900">${totalPrice(true, tax)}</span>
        </p>
        <Button className="w-full">Checkout</Button>
        <Link
          className="text-black-900 text-xs underline font-medium inline-flex items-center justify-center py-7 w-full"
          href="/search"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
