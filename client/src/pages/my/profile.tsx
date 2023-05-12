import { useCurrentUser } from "@/components/CurretnUserProvider";
import Drawer from "@/components/Drawer";
import Layout from "@/components/Layout";
import MobileSidebar from "@/components/MobileSidebar";
import { IProduct } from "@/interfaces/product";
import { IUser } from "@/interfaces/user";
import axios from "axios";
import { Sidebar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

export default function Profile() {
  const [myProducts, setMyProducts] = useState<IProduct | undefined>();
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  // if (!currentUser) {
  //   router.push('/auth/signin');
  //   return <>nevtreegu bna</>; // or any loading indicator
  // }
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
  return (
    <Layout>
      {/* {console.log("currentUser", currentUser)} */}
      {/* <div className="text-3xl">{currentUser?.email}</div>
      <div>id:{currentUser?._id}</div>
      <div>
        <span className="font-bold">Product </span>
        {myProducts?.map((myProduct:IProduct) => (
          <Image
            key={myProduct._id}
            src={myProduct.productImageSrc}
            alt="image"
            width={100}
            height={100}
          />
        ))}
      </div> */}
      {/* <MobileSidebar/> */}
      <div className="flex bg-[rgb(0,0,0,.1)] gap-10 p-2">
        <div className="w-fit rounded-2xl">
          <Sidebar aria-label="Sidebar with multi-level dropdown example p-0">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiShoppingBag}
                  href="#"
                >

                  E-commerce
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item
                  href="/"
                  icon={HiTable}
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                >
                  Sign Out
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="h-wull w-full bg-white">board</div>
      </div>
      {/* <Drawer/> */}
    </Layout>
  );
}
