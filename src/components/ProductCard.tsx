import Image from "next/image";
import Link from "next/link";
import { Drink } from "@/types";

interface ProductCardProps extends Drink {}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, url, price }) => {
  return (
    <div className="h-[300px] mb-4  group transition">
      <div className="w-full h-full flex justify-center items-center z-20 relative">
        <img
          src={url}
          alt="name"
          className="max-h-[300px] group-hover:scale-110 transition duration-300"
        />
      </div>
    </div>
  );
};

export default ProductCard;
