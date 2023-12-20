import Link from "next/link";
import drinks from "@/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <article className="my-16 text-center">
        <h3 className="font-bold text-[25px] uppercase">Our Products</h3>
        <div className="w-[80px] h-[2px] bg-green-500 mx-auto" />
      </article>
      <div className="flex justify-center gap-4 flex-wrap">
        {drinks.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
