import Navbar from "@/app/Navbar";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-[200px]">{children}</main>;
}
