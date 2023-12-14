import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

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
          <div className="">
            {/* <Navbar /> */}
            {children}
          </div>
        </AuthProvider>
      </body>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
