"use client";

import Products from "@/components/Products";
import ShopHero from "@/components/ShopHero";

const Shop = () => {
  return (
    <div>
      <ShopHero />
      <div className="lg:px-[50px]">
        <Products />
      </div>
    </div>
  );
};

export default Shop;
