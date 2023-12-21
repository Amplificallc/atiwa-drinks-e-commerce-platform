"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const router = useRouter();
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setUser, user } = useAuth();
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/home");
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const totalQuantities = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  console.log(totalQuantities);

  if (isOpen) {
    alert("Shopping cart is being implemented. Please wait...");
    setIsOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        hasShadow ? "shadow-xl" : ""
      } bg-white transition-shadow text-black`}
    >
      <div className="px-6 lg:px-[150px] py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Logo
          </Link>
          <div className="flex gap-x-6 items-center">
            <div className="cursor-pointer" onClick={handleSignOut}>
              Logout
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl relative"
            >
              <MdOutlineAddShoppingCart className="cursor-pointer text-[30px]" />
              <span className="absolute -right-2 -top-1 text-[13px] w-[20px] h-[20px] bg-red-500 text-white rounded-full flex justify-center items-center font-bold p-[10px]">
                {totalQuantities}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
