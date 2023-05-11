import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MyThreeComponent from "@/components/Three/three.dynamic";
import React, { Suspense } from "react";

export default function Order() {
  return (
    <>
      <Navbar />
      <div>order</div>
      <Footer />
    </>
  );
}
