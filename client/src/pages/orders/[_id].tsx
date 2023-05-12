import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Three from "@/components/Three";
import MyThreeComponent from "@/components/Three/three.dynamic";
import React, { Suspense } from "react";

export default function Order() {
  return (
    <>
      <Navbar />
      <div>order</div>
      {/* <Three/> */}
      <Footer />
    </>
  );
}
