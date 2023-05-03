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
              {/* <Image
                src={product.productImageSrc}
                alt={product.imageAlt}
                width={1000}
                height={100}
              /> */}
              <Image
                src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
                alt="product"
                width={1000}
                height={100}
              />
            </div>
            <div className="bg-[rgba(246,246,246)] rounded-2xl px-5">
              <h2 className="font-bold text-4xl my-3">Усний сав</h2>
              <div className="text-3xl my-3">₮12000</div>
              <div className="grid grid-cols-2">
              <div className="col-span-1">category:</div><div className="col-span-1"> ger ahui</div>
              <div className="col-span-1">size:</div><div className="col-span-1"> M</div>
              <div className="col-span-1">baraanii tolov:</div><div className="col-span-1"> 100%</div>
              <div className="col-span-1">zar oruulsan ognoo:</div><div className="col-span-1"> 2023 5-1</div>
              <div className="col-span-1">hurgeltiin une:</div><div className="col-span-1">  5000</div>
              <div className="col-span-2 bg-white rounded-2xl py-3 px-1">description:
              <p className="pl-10">manai haanii myngan langiin myngan mongon bombogiig maniag haanii myngan langii myngan</p></div>
              </div>
              <button type="button" className="rounded-2xl bg-blue-600 w-full py-2 my-5 b-0">hudaldaj avah</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
