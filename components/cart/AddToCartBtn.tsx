"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { CartContext, CartItem } from "@/context/CartContext";

interface ItemProps {
  item: CartItem;
}

export default function AddToCartBtn({ item }: ItemProps) {
  const { addToCart } = useContext(CartContext);
  return (
    <Button onClick={() => addToCart(item)} size="lg">
      Add to cart
    </Button>
  );
}
