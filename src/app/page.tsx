import Image from "next/image";
import Products from "@/components/Products";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  return (
    <div className="mt-[150px]">
      <Products />
    </div>
  );
}
