import Breadcrumd from "@/components/Breadcrumd";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:8000/products/idm/id");
  const data = await response.json();

  const paths = data.map((_id: string) => ({
    params: {
      _id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetServerSidePropsContext) => {
  const response = await fetch(`http://localhost:8000/products/${params?._id}`);
  const data = await response.json();

  return {
    props: { data },
  };
};
interface Props {
  data: IProduct;
}

// const {currentUser}= useCurrentUser();
// const [myProducts,setMyProducts]= useState();
// useEffect(() => {
//   axios
//     .get(`http://localhost:8000/products/ids/${currentUser?._id}`)
//     .then((res) => {
//       setMyProducts(res.data);
//       console.log("my product", myProducts);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

const Index: FC<Props> = ({ data }) => {
  const product = data;
  const [category,setCategory]= useState<IProduct>([]);
useEffect(()=>{
  axios.get(`http://localhost:8000/products?category=${product.option}`).then((res)=>{
    setCategory(res.data);
  }).catch((err)=>{
    console.log(err)
  })
},[])
  

  if (!product) return <>page not found</>;

  return (
    <>
      <Layout>
        {/* <div className="container">
          <Breadcrumd />
          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 ">
            <div className=" relative w-full items-stretch overflow-hidden">
              <Image
                src={product.productImageSrc}
                alt={product.imageAlt}
                fill
                className=" aspect-square h-full hover:scale-125"
              />
             
            </div>
            <div className="bg-[rgba(246,246,246)] rounded-2xl px-5">
              <h2 className="font-bold text-4xl my-3">Усний сав</h2>
              <div className="text-3xl my-3">₮{product.price}</div>
              <div className="grid grid-cols-2">
                <div className="col-span-1">category:</div>
                <div className="col-span-1">{product.category}</div>
                <div className="col-span-1">size:</div>
                <div className="col-span-1"> {product.size}</div>
                <div className="col-span-1">baraanii tolov:</div>
                <div className="col-span-1"> {product.productState}</div>
                <div className="col-span-1">zar oruulsan ognoo:</div>
                <div className="col-span-1"> {product.createdAt}</div>
                <div className="col-span-1">hurgeltiin une:</div>
                <div className="col-span-1"> 5000</div>
                <div className="col-span-2 bg-white rounded-2xl py-3 px-1">
                  description:
                  <p className="pl-10">
                    
                    {product.about}
                  </p>
                </div>
              </div>
              <Link href={`/orders/${product._id}`} key={product._id}>
                <button
                  type="button"
                  className="rounded-2xl bg-[#1cb7d6] w-full py-2 my-5 b-0"
                >
                  hudaldaj avah
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className=" m-8 flex flex-col justify-between lg:flex-row gap-16 lg:items-start">
          <div className="flex flex-col gap-6 lg:w-2/4">
            {/* eronhii zurag */}
            <Image
              className="w-full aspect-square object-cover overflow-hidden hover:scale-125"
              width={1000}
              height={100}
              src={product.productImageSrc}
              alt="logo"
            />
          </div>
          {/* tailbar heseg */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
            </div>
            <p>Категори: {product.category}</p>
            <p>Хэмжээ: {product.size}</p>
            <p>Барааны төлөв: {product.productState}</p>
            <p>Зар оруулсан огноо: {product.createdAt}</p>
            <p>Хүргэлтийн үнэ: 5000₮</p>
            <p className="text-gray-700">
              Flex your style in the Air Max 95 QS. Taking inspiration from the
              human body and 90s track aesthetics, it taps into The Anatomy of
              Air with a healthy dose of muscle-inspired colors. And if thats
              not enough, the iconic side panels (done in premium suede) feature
              deco stitching for a fibrous texture thats more head turning than
              those gym rats pumping iron.
            </p>
            <h5 className="text-2xl font-semibold">₮ {product.price}</h5>
            <div className="flex flex-row items-center gap-12">
            <Link href={`/orders/${product._id}`} key={product._id} className="w-full">
              <button className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl h-full w-full">
                Бараа захиалах
              </button>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl">Төстэй бараанууд</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {category.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
      </Layout>
    </>
  );
};

export default Index;
