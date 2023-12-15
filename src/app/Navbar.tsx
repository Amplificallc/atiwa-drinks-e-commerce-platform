"use client";
import Link from "next/link";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const Navlinks = [
    {
      id: 1,
      name: "About",
      path: "#about",
    },
    {
      id: 2,
      name: "Become A Distributor",
      path: "#distributor",
    },
    {
      id: 3,
      name: "Careers",
      path: "#careers",
    },
    {
      id: 4,
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <section className="navigation fixed top-0 w-full shadow-md h-20 bg-white flex flex-row justify-between items-center px-16">
      <div className="logo">
        <h1 className="text-green-600 text-xl font-bold ">Logo</h1>
      </div>
      {/* Desktop Navbar */}
      <nav className="flex flex-row justify-between items-center space-x-14">
        {Navlinks.map((navlink, id) => (
          <div key={id}>
            <Link
              href={navlink.path}
              className={`hover:font-bold text-sm 4 ${
                pathName === navlink.path ? "active" : ""
              } hover:text-green-500 hover:font-bold hover:text-md`}
            >
              {navlink.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="cta-buttons">
        <Link href="/auth/login">
          <button className="bg-green-600 text-white font-semibold flex flex-row justify-between items-center px-7 w-40 h-14 rounded-md hover:bg-black">
            Shop Now
            <RiShoppingCart2Fill className />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
