import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atiwa Bitters",
  description: "Naturally brewed alcohol from Ghana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <div className="">{children}</div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
