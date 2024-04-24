import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSlider from "@/components/product/ProductSlider";
import ProductTabs from "@/components/product/ProductTabs";
import SimilarProduct from "@/components/product/SimilarProduct";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="flex items-center py-5 px-4 text-sm space-x-1">
          <Link href="/" className="text-black-500 font-medium">
            Ecommerce
          </Link>
          <span className="w-6 h-6 inline-flex items-center justify-center">
            <Icons.ChevronRight className="w-[6px] h-4" />
          </span>
          <h2 className="text-black-900 font-medium">Black Man Shirt</h2>
        </div>
        <div className="flex items-center justify-between pb-24 gap-18">
          <ProductSlider />
          <ProductDetails {...DummyProductDetails} activeColor={"blue"} />
        </div>
        <ProductTabs />
        <SimilarProduct />
      </MaxWidthWrapper>
    </main>
  );
}

const DummyProductDetails = {
  title: "Raw Black T-shirt Lineup",
  rate: 4.2,
  reviews: 54,
  price: "75.00",
  colors: ["blue", "yellow", "green"],
  sizes: ["S", "M", "L", "XL", "2XL"],
  stock: 10,
};
