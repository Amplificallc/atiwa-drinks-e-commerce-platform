import Image from "next/image";
import Link from "next/link";
import { Drink } from "@/types";

interface ProductCardProps extends Drink {}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, url, price }) => {
  return (
    <div className="w-[260px] py-4 mb-4 bg-gray-100/50 shadow-lg rounded-lg border-opacity-30 hover:border-opacity-90 transition-all pt-6 flex items-center flex-col">
      <div className="mb-6 overflow-hidden">
        <img src="/wine.png" alt={name} className="h-[150px] drop-shadow-xl" />
      </div>
      <article className="flex flex-col items-center gap-3">
        <h3 className="uppercase font-primary text-[12px] font-semibold text-black">
          Chase Elder Liqueur 70cl
        </h3>
        <p className="text-black text-[20px] font-semibold">
          <span>₵</span>
          <span>435.39</span>
        </p>
        <button className="py-1 w-max px-3 bg-inherit text-black border border-black rounded-md text-[12px] font-primary">
          ADD TO CART
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
