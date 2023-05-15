import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag, HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

interface AsideBarProps {
  children: ReactNode;
}

const Aside: FC<AsideBarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div className="h-screen flex  bg-slate-50 text-slate-600">
        <div
          className={` ${open ? "w-16 sm:w-60" : "w-16"}
         bg-slate-200 h-screen relative duration-500 `}
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
              </div>
            </Link>
            <Link
              href={"order"}
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium scroll"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <HiOutlineShoppingBag size={30} className="min-w-max pr-2" />
                Миний захиалгууд
              </div>
            </Link>
            <Link
              href={"wish"}
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <AiOutlineHeart size={30} className="min-w-max pr-2" />
                Таны хадгалсан
              </div>
            </Link>
            <Link
              href=""
              className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
            >
              <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
                <MdExitToApp size={30} className="min-w-max pr-2" />
                Гарах
              </div>
            </Link>
          </div>
        </div>
        {/* Profile */}
        <main className="m-10 w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Aside;
