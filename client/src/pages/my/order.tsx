import { BsFillBoxSeamFill, BsBoxSeam } from "react-icons/bs";
import Aside from "./profile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import ProductCard from "@/components/ProductCard";
import { IOrder } from "@/interfaces/product";

const Order = () => {
  const [myOrders, setMyOrders] = useState<IOrder | []>([]);
  const { currentUser } = useCurrentUser();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/orders/ids/${currentUser?._id}`)
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
      <div className="flex justify-center items-center my-10 py-8 px-4 mx-auto max-w-2xl lg:py-16">
        {myOrders.map((item: any) => (
          <div key={item}>{item.productId}</div>
        ))}
      </div>
    </Aside>
  );
};

export default Order;
