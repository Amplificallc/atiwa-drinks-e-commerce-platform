import drinks from "@/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div id="products">
      <article className="my-16 text-center">
        <h3 className="font-bold text-[25px] uppercase">Our Products</h3>
        <div className="w-[80px] h-[2px] bg-green-500 mx-auto" />
      </article>
      <div className="flex flex-col md:flex-row justify-center gap-5 flex-wrap px-4">
        {drinks.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
