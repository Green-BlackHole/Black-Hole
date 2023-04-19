import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import { Inter } from "next/font/google";
import Image from "next/image";
// import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [isSticky, setIsSticky] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <Navbar />
      <section className="banner">
        <Image
          src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
          alt="fgh"
          width={1000}
          height={100}
          className="w-full h-screen bg-cover object-cover"
        />
      </section>
      <Hero />
      {/* <Scroll /> */}
      <Footer />
      {/* <h1 className="h-screen">Hello </h1> */}
    </>
  );
}
