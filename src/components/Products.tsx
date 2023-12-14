import Link from "next/link";
import drinks from "@/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        {drinks.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
