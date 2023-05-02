import { data } from "@/data/data";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Orders = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response: { data: any }) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [products]);
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="flex justify-between p-4">
        <h2>Products</h2>
        <h2>Welcome Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="text-black my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>products</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden md:grid">Method</span>
          </div>
          <ul>
            {products.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100  text-black rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  {/* <div className="bg-green-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-green-800" /> */}
                  <Image
                    src={order.productImageSrc}
                    alt={order.imageAlt}
                    width={100}
                    height={100}
                    className="h-20 object-cover"
                  />
                  {/* </div> */}
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">${order.price}</p>
                    <p className="text-gray-800 text-sm">{order.name}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {/* <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span> */}
                </p>
                <p className=" hidden md:flex">
                  {moment(order.createdAt).fromNow(true)} ago
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.size}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
