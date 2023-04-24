import Breadcrumd from "@/components/Breadcrumd";
import Layout from "@/components/Layout";
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
  }, []);

  if (!product) return <h1>Product not found</h1>;

  return (
    <>
      <Layout>
        <Breadcrumd />
        <h1>{product.id}</h1>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={1000}
          height={100}
        />
      </Layout>
    </>
  );
};

export default Index;
