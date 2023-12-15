import Navbar from "../Navbar";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main>
             <Navbar/>
              {children}
        </main>
    
    );
  }
  