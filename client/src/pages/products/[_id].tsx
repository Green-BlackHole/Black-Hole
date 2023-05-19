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
  const response = await fetch(process.env.API_URL + "/products/idm/id");
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
  const response = await fetch(
    process.env.API_URL + `/products/${params?._id}`
  );
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
//     .get(process.env.API_URL + `/products/ids/${currentUser?._id}`)
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
  const addWishlist = "https://cdn-icons-png.flaticon.com/512/3132/3132924.png";
  const removeWishlist =
    "https://cdn.icon-icons.com/icons2/3553/PNG/512/wishlist_favorites_favorite_heart_like_ecommerce_icon_224938.png";
  const [wishlist, setWishlist] = useState(true);
  function handleWishlist(product: any) {
    setWishlist(!wishlist);
    console.log(wishlist);
    wishlist &&
      axios
        .post(process.env.API_URL + "/wishlist", product)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    !wishlist && deleteWishlist(product._id);
  }
  const deleteWishlist = (productId: string) => {
    axios
      .delete(process.env.API_URL + `/wishlist/${productId}`, {
        data: { userId: product.userId },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(() => {
    axios
      .get(process.env.API_URL + `/products?category=${product.option}`)
      .then((res) => {
        setCategoryProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!product && !isLoading) return <>page not found</>;

  return (
    <>
      <Layout>
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
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <button type="button" onClick={() => handleWishlist(product)}>
                <Image
                  src={wishlist ? addWishlist : removeWishlist}
                  alt="wishlist image"
                  width={100}
                  height={100}
                  className="w-6 h-6 aspect-5/5 mt-2 ml-5"
                />
              </button>
              {/* <button
                type="button"
                onClick={() => deleteWishlist(product._id)}
                className="ml-5"
              >
                delete
              </button> */}
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
          {categoryProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
