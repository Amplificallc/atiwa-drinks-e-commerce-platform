import Image from "next/image";
import Link from "next/link";
import { Drink } from "@/types";

interface ProductCardProps extends Drink {}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, url, price }) => {
  return (
    <div className="h-[350px] w-[280px] mb-4 border border-gray-300 border-opacity-30 hover:border-opacity-90 transition-all pt-6 flex items-center flex-col">
      <div className="mb-6 overflow-hidden">
        <img src={url} alt={name} className="h-[150px] drop-shadow-xl" />
      </div>
      <article className="flex flex-col items-center gap-2">
        <h3 className="uppercase font-primary text-[14px] font-semibold">
          Chase Elder Liqueur 70cl
        </h3>
        <p className="text-red-900 font-bold text-[16px]">
          <span>$</span>
          <span>435.39</span>
        </p>
        <button className="py-2 w-max px-3 bg-black text-white font-bold">
          ADD TO CART
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
