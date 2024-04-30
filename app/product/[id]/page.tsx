import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PagesNav from "@/components/layouts/PagesNav";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSlider from "@/components/product/ProductSlider";
import ProductTabs from "@/components/product/ProductTabs";
import SimilarProduct from "@/components/product/SimilarProduct";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <MaxWidthWrapper>
        <PagesNav secondTitle="Black Man Shirt" />
        <div className="flex flex-col md:flex-row items-center justify-between pb-24 gap-18">
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
