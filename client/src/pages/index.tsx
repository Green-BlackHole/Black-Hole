import ProductCard from "@/components/ProductCard";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Reklam from "@/components/Reklam";
import Category from "@/components/Category";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Carousel slideInterval={3000} />
        <ProductCard />
        <ImageCard />
        <Reklam />
      </Layout>
    </>
  );
}
