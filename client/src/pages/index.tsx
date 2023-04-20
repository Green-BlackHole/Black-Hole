import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Scroll from "@/components/Scroll";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Reklam from "@/components/Reklam";

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

      {/* <Hero />
      <Scroll /> */}
      <Hero />
      {/* <Scroll /> */}
      <Footer />
      {/* <h1 className="h-screen">Hello </h1> */}
    </>
  );
}
