import Image from "next/image";
import Link from "next/link";
import { Drink, CartItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps extends Drink {}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  url,
  description,
  price,
}) => {
  const { cartItems, addItem } = useCart();
  console.log(cartItems);

  const handleAddToCart = () => {
    const itemToAdd: CartItem = {
      id: id.toString(), // Convert to string
      name,
      url,
      price,
      description,
      quantity: 1,
    };
    addItem(itemToAdd);
  };
  return (
    <div className="lg:w-[240px] py-5 mb-4  shadow-lg rounded-lg transition-all flex items-center flex-col">
      <div className="mb-6 overflow-hidden">
        <img src={url} alt={name} className="h-[150px] drop-shadow-xl" />
      </div>
      <article className="flex flex-col items-center gap-3">
        <h3 className="uppercase font-primary text-[12px] font-semibold text-black">
          Chase Elder Liqueur 70cl
        </h3>
        <p className="text-black text-[20px] font-semibold">
          <span>₵</span>
          <span>{price}</span>
        </p>
        <button
          className="py-1 w-full lg:w-max px-3 bg-inherit text-black border border-black rounded-md text-[12px] font-primary"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
