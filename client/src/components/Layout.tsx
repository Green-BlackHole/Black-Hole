import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
