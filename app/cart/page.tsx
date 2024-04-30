import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import PagesNav from "@/components/layouts/PagesNav";
import React from "react";

export default function CartPage() {
  return (
    <MaxWidthWrapper>
      <PagesNav secondTitle="Cart" bigTitle="Cart" />
      {true ? <CartSummary /> : <EmptyCart />}
    </MaxWidthWrapper>
  );
}
