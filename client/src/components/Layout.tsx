import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {children}
      </div>
      <Footer />
    </>
  );
}
