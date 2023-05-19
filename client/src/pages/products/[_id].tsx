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
import moment from "moment";

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
  const [category, setCategory] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products?category=${product.option}`)
      .then((res) => {
        setCategory(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!product) return <>page not found</>;
  if (isLoading) return;
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
          <div className="flex flex-col gap-6 lg:w-2/4 overflow-hidden rounded-lg">
            {/* eronhii zurag */}
            <Image
              className="w-full aspect-square object-cover hover:scale-125"
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
            <p>
              Зар оруулсан огноо: {moment(product.createdAt).fromNow(true)} ago
            </p>
            <p>Хүргэлтийн үнэ: 5000₮</p>
            <p className="text-gray-700">
              Flex your style in the Air Max 95 QS. Taking inspiration from the
              human body and 90s track aesthetics, it taps into The Anatomy of
              Air with a healthy dose of muscle-inspired colors. And if thats
              not enough, the iconic side panels (done in premium suede) feature
              deco stitching for a fibrous texture thats more head turning than
              those gym rats pumping iron.
            </p>
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-semibold">₮ {product.price}</h5>
              <Image
                src="data:image/png;base64,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"
                alt="wishlist image"
                width={100}
                height={100}
                className="w-5 h-5 aspect-5/5"
              />
            </div>
            <div className="flex flex-row items-center gap-12">
              <Link
                href={`/orders/${product._id}`}
                key={product._id}
                className="w-full"
              >
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
