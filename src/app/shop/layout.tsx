import Navbar from "@/components/Navbar";
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="lg:px-[200px]">
      <Navbar />
      {children}
    </main>
  );
}
