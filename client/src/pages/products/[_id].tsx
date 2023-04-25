import Breadcrumd from "@/components/Breadcrumd";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [product, setProduct] = useState<IProduct | undefined>();
  const a = useRouter();
  const { _id } = a.query;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${_id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.error(error));
  }, [_id]);

  if (!product) return <>ghjk</>;

  return (
    <>
      <Layout>
        <Breadcrumd />
        <h1>{product._id}</h1>
        <Image
          src={product.productImageSrc}
          alt={product.imageAlt}
          width={1000}
          height={100}
        />
      </Layout>
    </>
  );
};

export default Index;
