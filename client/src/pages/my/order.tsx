import { BsFillBoxSeamFill, BsBoxSeam } from "react-icons/bs";
import Aside from "./profile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import ProductCard from "@/components/ProductCard";
import { IOrder } from "@/interfaces/product";
import Image from "next/image";
import moment from "moment";

const Order = () => {
  const [myOrders, setMyOrders] = useState<IOrder[] | []>([]);
  const { currentUser } = useCurrentUser();
  useEffect(() => {
    axios
      .get(process.env.API_URL + `/orders/ids/${currentUser?._id}`)
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("order", myOrders);
  return (
    <Aside>
      <div className="bg-white rounded-lg p-4">
      <h2 className="font-bold text-2xl">My orders</h2>
      <div className="">
        {myOrders.map((item: any) => (
         <div className=" p-2 flex items-center gap-10 border-b-2 max-md:gap-2 max-sm:justify-between">
          <Image src={item.productImageSrc} alt={item._id} width={1000} height={100} className="h-[70px] w-[70px] bg-cover object-cover rounded-lg"/>
          <div className="w-[50px] max-sm:hidden">₮{item.price}</div>
          <div className="w-[200px]">{item.email}</div>
          <div className="w-[100px] max-xl:hidden">
            {moment(item.createdAt).fromNow(true)} ago
            </div>
            <div className="w-[100px] max-lg:hidden">{item.city}</div>
            <div className="w-[200px] max-lg:hidden">{item.streetAddress}</div>
         </div>
        ))}
      </div>
      </div>
    </Aside>
  );
};

export default Order;
