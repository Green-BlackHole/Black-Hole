import ProductCard from "@/components/ProductCard";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Reklam from "@/components/Reklam";
import Category from "@/components/Category";
import Script from "next/script";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [queryValue, setQueryValue] = useState([]);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" />
      <Navbar />
      <section className="banner">
        <Image
          src="https://thumbs.dreamstime.com/b/flat-line-design-website-banner-e-commerce-modern-vector-illustration-web-marketing-print-material-68581557.jpg"
          alt="banner image"
          width={1000}
          height={100}
          className="w-full h-[700] bg-cover object-cover max-h-96"
        />
      </section>
          <ProductCard />
      <ImageCard />
      <Reklam />
      <Footer />
    </>
  );
}
