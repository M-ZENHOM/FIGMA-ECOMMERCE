import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PagesNav from "@/components/layouts/PagesNav";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSlider from "@/components/product/ProductSlider";
import ProductTabs from "@/components/product/ProductTabs";
import SimilarProduct from "@/components/product/SimilarProduct";
import { DummyProducts } from "@/config/dummyData";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData = DummyProducts.find(
    (product) => product.id === Number(id)
  );
  if (!productData) return notFound();

  return (
    <main>
      <MaxWidthWrapper>
        <PagesNav secondTitle="Black Man Shirt" />
        <div className="flex flex-col md:flex-row items-center justify-between pb-24 gap-18">
          <ProductSlider image={productData.image} />
          <ProductDetails {...productData} activeColor={"blue"} />
        </div>
        <ProductTabs />
        <SimilarProduct />
      </MaxWidthWrapper>
    </main>
  );
}
