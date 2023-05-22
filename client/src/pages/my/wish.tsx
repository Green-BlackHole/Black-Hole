import Link from "next/link";
import Aside from "./profile";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces/product";
import MyModal from "@/components/Modal";

const Wish = () => {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return <MyModal/>;
  }

  const [myWishlist, setMyWhishlist] = useState<IProduct[]>();
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + `/wishlist/mywishlist/${currentUser?._id}`)
      .then((res) => {
        setMyWhishlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  console.log("wish",myWishlist)
  return (
    <Aside>
      <div>
        <div className="bg-white rounded-lg h-full">
          <div className="mx-auto  p-4 px-6 ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Таны хадгалсан
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {myWishlist?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </Aside>
  );
};

export default Wish;
