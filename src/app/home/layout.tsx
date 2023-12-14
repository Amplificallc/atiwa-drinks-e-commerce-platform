import Navbar from "@/app/Navbar";
import React from "react";

export default function HomeLayout({
    children}: {children: React.ReactNode}
)
{
    return(
    <main>
        <Navbar/>
         {children}
        </main>
    )
}