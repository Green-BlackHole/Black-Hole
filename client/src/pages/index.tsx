import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Scroll from "@/components/Scroll";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Reklam from "@/components/Reklam";
import Category from "@/components/Category";
import Script from "next/script";

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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" />
      <Navbar />
      <section className="banner">
        <Image
          src="https://thumbs.dreamstime.com/b/flat-line-design-website-banner-e-commerce-modern-vector-illustration-web-marketing-print-material-68581557.jpg"
          alt="banner image"
          width={1000}
          height={100}
          className="w-full h-[700] bg-cover object-cover"
        />
      </section>

      <ImageCard />

      <Reklam />

      <ProductCard />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 grid grid-cols-4">
        <div className="col-span-1 max-md:hidden">
          <Category />
        </div>
        <div className="col-span-3 max-md:col-span-4">
          <ProductCard />
        </div>
      </div>

      {/* <Hero />
      <Scroll /> */}
      <Hero />
      {/* <Scroll /> */}
      <Footer />
      {/* <h1 className="h-screen">Hello </h1> */}
    </>
  );
}
