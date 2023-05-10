import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { IProduct } from "@/interfaces/product";
import { IUser } from "@/interfaces/user";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [myProducts, setMyProducts] = useState<IProduct | undefined>();
  const router = useRouter();

  const { currentUser } = useCurrentUser();
  // if (!currentUser) {
  //   router.push('/auth/signin');
  //   return <>nevtreegu bna</>; // or any loading indicator
  // }
  React.useEffect(() => {
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
      <div className="text-3xl">{currentUser?.email}</div>
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
      </div>
      
    </Layout>
  );
}
