"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        hasShadow ? "shadow-xl" : ""
      }  transition-shadow text-black `}
    >
      {/* Navbar content here */}
      <div className="px-6 lg:px-[200px] py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold ">
            Attiwa
          </Link>
          <div onClick={() => setIsOpen(!isOpen)} className="text-2xl relative">
            <IoBagOutline className="cursor-pointer text-[30px]" />
            <div className="absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] bg-red-500 text-white rounded-full flex justify-center items-center font-bold">
              0
            </div>
          </div>
          {/* <div>Login</div> */}
        </div>
        {/* Other navbar items */}
      </div>
    </nav>
  );
};

export default Navbar;
