import Link from "next/link";
import drinks from "@/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 flex-wrap bg-red-400">
        {drinks.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
