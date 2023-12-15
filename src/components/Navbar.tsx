"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoBagOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const router = useRouter();
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setUser } = useAuth();
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
      // Successfully signed out
      // You can redirect the user to login page or home page
      // e.g., using useRouter from Next.js: router.push('/login');
      router.push("/home");
      setUser(null);
    } catch (error) {
      // An error happened during the sign out
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        hasShadow ? "shadow-xl" : ""
      } bg-white transition-shadow text-black`}
    >
      {/* Navbar content here */}
      <div className="px-6 lg:px-[200px] py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Attiwa
          </Link>
          <div onClick={() => setIsOpen(!isOpen)} className="text-2xl relative">
            <IoBagOutline className="cursor-pointer text-[30px]" />
            <div className="absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] bg-red-500 text-white rounded-full flex justify-center items-center font-bold">
              0
            </div>
          </div>
          <button className="" onClick={handleSignOut}>
            logout
          </button>
          {/* <div>Login</div> */}
        </div>
        {/* Other navbar items */}
      </div>
    </nav>
  );
};

export default Navbar;
