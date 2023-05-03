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
    if (_id) {
      axios
        .get(`http://localhost:8000/products/${_id}`)
        .then((res) => {
          setProduct(res.data);
          console.log(product);
        })
        .catch((error) => console.error(error));
    }
  }, [_id, product]);

  if (!product) return <>page not found</>;

  return (
    <>
      <Layout>
        <div className="container">
          <Breadcrumd />
          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 ">
            <div>
              <Image
                src={product.productImageSrc}
                alt={product.imageAlt}
                width={1000}
                height={100}
              />
            </div>
            <div>
              <h2 className="font-bold text-4xl">{product.name}</h2>
              <div className="text-3xl">₮{product.price}</div>
              <div>description: {product.about}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
