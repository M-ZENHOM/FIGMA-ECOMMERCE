"use client";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

export default function Index() {
  const { cart } = useContext(CartContext);
  return <>{cart.length > 0 ? <CartSummary /> : <EmptyCart />}</>;
}
