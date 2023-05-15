import MyThreeComponent from "@/components/Three/three.dynamic";
import React, { Suspense } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function Three() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="grid grid-cols-2 items-center bg-[#15d2d3]">
        <div className="col-span-1 flex justify-center items-center">
          <div className="flex flex-col max-w-lg">
            <h2 className="font-semi-bold text-8xl my-5 text-[#ff598f]">
              <Typewriter words={["new collection"]} loop={false} />
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tempor ac ante ac porta. Ut in posuere elit. Sed ut nibh
              ultricies, porta neque aliquam, suscipit dolor.{" "}
            </p>
            {/* <button className="bg-[#ffd700] rounded-3xl py-3 w-30">
              see more ...
            </button> */}
          </div>
        </div>
        <div className="col-span-1 mt-20">
          <Suspense fallback={<div>Loading...</div>}>
            <MyThreeComponent />
          </Suspense>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
