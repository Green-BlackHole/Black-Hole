import Image from "next/image";
import Aside from "./profile";
import { CgLock, CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

const Info = () => {
  const [myProducts, setMyProducts] = useState<IProduct | []>([]);
  const router = useRouter();

  const { currentUser } = useCurrentUser();
  // if (!currentUser) {
  //   router.push("/auth/signIn");
  // }
  if (!currentUser) {
    return <>Ta nevtreegui baina!</>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("user:", currentUser);
    if (!currentUser) {
      router.push("/auth/signIn");
    }
    // if (currentUser) {
    //   router.push;
    // }
  }, [currentUser, router]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  const deleteProduct = (productId: string) => {
    axios
      .delete(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        console.log("Product deleted successfully:", response);
        const filteredProducts = myProducts.filter(
          (product: any) => product._id !== productId
        );
        setMyProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  return (
    <Aside>
      <>
        <section className=" rounded-lg grid grid-cols-2 gap-5">
          <div className="col-span-1 rounded-lg p-5 bg-white">
            <Image
              width={150}
              height={150}
              alt="profile"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="rounded-full mx-auto"
            />
            <h2 className="font-bold flex justify-center">
              {currentUser.email}
            </h2>
            {/* <button>zurag shinechleh</button> */}
          </div>
          <div className="col-span-1 flex flex-col rounded-lg gap-5">
            <div className="bg-white h-1/2 p-5 rounded-lg flex items-center justify-between">
              <div className="font-bold">
                <CgProfile size={30} className="min-w-max pr-2 mb-2" />
                Хувийн мэдээлэл
              </div>
              <Link href="update">
                <p className="text-sm cursor-pointer">shinechleh</p>
              </Link>
            </div>

            <div className="bg-white h-1/2 p-5 rounded-lg flex items-center justify-between">
              <div className="font-bold">
                <CgLock size={30} className="min-w-max pr-2 mb-2" />
                Цахим хаяг
              </div>
              <p className="text-sm">batalgaajsan</p>
            </div>
          </div>
        </section>
        <h2 className="font-bold text-3xl mt-10">my product</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {myProducts?.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <Link href={`/products/${product._id}`} key={product._id}>
                <Image
                  src={product.productImageSrc}
                  alt="image"
                  width={1000}
                  height={100}
                  className="h-36 object-cover rounded-lg cursor-pointer"
                />
              </Link>
              <div className="mt-4 flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                    <span aria-hidden="true" />
                    {product.name}
                    {/* </a> */}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link href={`/products/put/${product._id}`} key={product._id}>
                  <button
                    className="bg-[#ff598f] px-4 rounded-md"
                    type="button"
                  >
                    zasah
                  </button>
                </Link>

                <button
                  className="bg-[rgba(0,0,0,.2)] px-4 rounded-md cursor-pointer"
                  type="button"
                  onClick={() => deleteProduct(product._id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    </Aside>
  );
};

export default Info;
