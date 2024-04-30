import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchSideBar from "@/components/SearchSideBar";
import PagesNav from "@/components/layouts/PagesNav";
import ProductCard from "@/components/product/ProductCard";
import { Tag } from "@/components/ui/tag";

export default function SearchPage() {
  return (
    <MaxWidthWrapper className="pb-19">
      <PagesNav secondTitle="Search" />
      <div className="flex md:flex-row flex-col gap-6">
        <SearchSideBar />
        <div className="flex flex-col md:px-0 px-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium">Applied Filter:</h1>
            <div className="flex flex-wrap items-center gap-4">
              <Tag tagTitle="Perfume" withXIcon />
              <Tag tagTitle="Size: M" withXIcon />
            </div>
          </div>
          <div>
            <div className="text-xs text-black-500 font-medium flex items-center justify-between py-[20px]">
              <h1>Showing 1-9 of 36 results.</h1>
              <select>
                <option disabled>SORT BY</option>
                <option>Test</option>
                <option>Test 2</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[24px] max-sm:place-items-center">
              {DummyProducts.map((product) => (
                <ProductCard
                  className="w-[264px] h-[434px]"
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

const DummyProducts = [
  {
    id: 1,
    title: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "$35.00",
    image: "/shirts/cover.png",
  },
  {
    id: 2,
    title: "Monochromatic Wardrobe",
    stock: "IN STOCK",
    price: "$27.00",
    image: "/shirts/cover1.png",
  },
  {
    id: 3,
    title: "Essential Neutrals",
    stock: "IN STOCK",
    price: "$22.00",
    image: "/shirts/cover2.png",
  },
  {
    id: 4,
    title: "UTRAANET Black",
    stock: "IN STOCK",
    price: "$43.00",
    image: "/shirts/cover3.png",
  },
];
