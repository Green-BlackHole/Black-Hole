import { FC, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiMenuAlt3,HiChevronRight } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { IProduct } from "@/interfaces/product";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import axios from "axios";

interface AsideBarProps {
  children: ReactNode;
}

const Aside: FC<AsideBarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [myProducts, setMyProducts] = useState<IProduct | undefined>();
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    console.log("user:", currentUser);
    if (!currentUser) {
      router.push("/auth/signin");
    }
    // if (currentUser) {
    //   router.push;
    // }
  }, [currentUser, router]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/ids/${currentUser?._id}`)
      .then((res) => {
        setMyProducts(res.data);
        console.log("my product", myProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const removeToken=()=>{
    localStorage.removeItem("token");
  }

  return (
    <>
      <Navbar />
      <div className="h-screen flex  bg-[rgba(0,0,0,.05)] text-slate-600">
        <div
          className={` ${open ? "w-16 sm:w-auto" : "w-16"}
         bg-[rgb(255,255,255)] h-screen relative duration-500 m-4 rounded-lg`}
        >
          {/* little menu */}
          <div className={`flex justify-end p-3 cursor-pointer`}>
            <HiMenuAlt3 size={30} onClick={() => setOpen(!open)} />
          </div>

          <div className=" flex flex-col h-full text-lg p-1">
            <Link
              href={"info"}
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium scroll"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <CgProfile size={30} className="min-w-max pr-2" />
                Хувийн мэдээлэл 
                <HiChevronRight size={30} className="min-w-max pr-2 ml-10"/>
              </div>
            </Link>
            <Link
              href={"order"}
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium scroll"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <HiOutlineShoppingBag size={30} className="min-w-max pr-2" />
                Миний захиалгууд
                <HiChevronRight size={30} className="min-w-max pr-2 ml-10"/>

              </div>
            </Link>
            <Link
              href={"wish"}
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <AiOutlineHeart size={30} className="min-w-max pr-2" />
                Таны хадгалсан
                <HiChevronRight size={30} className="min-w-max pr-2 ml-10"/>

              </div>
            </Link>
            <Link
              href="/"
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
            >
              <button className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden" onClick={removeToken}>
                <MdExitToApp size={30} className="min-w-max pr-2" />
                Гарах
              </button>
            </Link>
          </div>
        </div>
        {/* Profile */}
        <main className="m-4 w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Aside;
