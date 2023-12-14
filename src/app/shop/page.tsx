"use client";

import { useContext } from "react";
import Products from "@/components/Products";
import { useAuth } from "@/context/AuthContext";

const Shop = () => {
  const { user } = useAuth();
  console.log(user);

  return <div className="mt-[150px]"></div>;
};

export default Shop;
