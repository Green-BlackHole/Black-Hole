import MyThreeComponent from "@/components/Three/three.dynamic";
import React, { Suspense } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function Three() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 items-center bg-slate-300">
        <div className="col-span-1">hello</div>
        <div className="col-span-1">
          <Suspense fallback={<div>Loading...</div>}>
            <MyThreeComponent />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}
