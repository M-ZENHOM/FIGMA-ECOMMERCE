"use client";
import Link from "next/link";
import { Icons } from "./Icons";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export const CartButton = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link href="/cart" className="relative">
      <Icons.Cart className="w-6 h-6" />
      {cart.length === 0 ? null : (
        <span className="absolute -top-2 -right-3 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white-900 bg-black-900 rounded-full transition-all duration-300">
          {cart.length}
        </span>
      )}
    </Link>
  );
};
