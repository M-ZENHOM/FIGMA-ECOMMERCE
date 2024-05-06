import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Cart from "@/components/cart/Index";
import PagesNav from "@/components/layouts/PagesNav";

export default function CartPage() {
  return (
    <MaxWidthWrapper>
      <PagesNav secondTitle="Cart" bigTitle="Cart" />
      <Cart />
    </MaxWidthWrapper>
  );
}
