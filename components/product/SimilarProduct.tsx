import { DummyProducts } from "@/config/dummyData";
import ProductCard from "./ProductCard";

export default function SimilarProduct() {
  return (
    <section className="pb-20">
      <div className="pb-10 md:text-start text-center">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <span className="font-medium text-xs text-black-300 uppercase">
          SIMILAR PRODUCTS
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-12gap-[20px] max-sm:place-items-center">
        {DummyProducts.slice(4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
