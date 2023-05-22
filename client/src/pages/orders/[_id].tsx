import { useCurrentUser } from "@/components/CurretnUserProvider";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MyModal from "@/components/Modal";
import Navbar from "@/components/Navbar/Navbar";
import Three from "@/components/Three";
import MyThreeComponent from "@/components/Three/three.dynamic";
import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { ChangeEvent, FC, Suspense, useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products/idm/id");
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
    process.env.NEXT_PUBLIC_API_URL + `/products/${params?._id}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};
interface Props {
  data: IProduct;
}

export default function Order({ data }: { data: any }) {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return <MyModal/>;
  }
  const order = data;
  const [addOrder, setAddOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    region: "",
    category: "",
    productImageSrc: order?.productImageSrc,
    price: order?.price,
    userId: currentUser?._id,
    productId: order?._id,
    status: true,
  });
  const [orderPrice, setOrderPrice] = useState(
    order.price + order.price / 20 + 5000
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(addOrder);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/orders/add", addOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddOrder({
      ...addOrder,
      [e.target.name]: e.target.value,
      // productImageSrc: imageUrl,
    });
    // if (e.target.name === "category") {
    //   const subCategory = category.find(
    //     (cat: any) => cat.categoryName == e.target.value
    //   ) || { subCategories };
    //   setSubCategories(subCategory.subCategories);
    // }
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <form action="">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Захиалагчийн мэдээлэл
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        id="phoneNumber"
                        name="phoneNumber"
                        type="number"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900 col-span-2">
                    Хүргэлтийн хаяг
                  </h2>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        type="text"
                        name="streetAddress"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e: any) => handleChange(e)}
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      haygiin ner
                    </label>
                    <select
                      onChange={(e: any) => handleChange(e)}
                      id="category"
                      name="category"
                      autoComplete="category-name"
                      className="mt-1.5  block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="home" key="home">
                        home
                      </option>
                      <option value="job" key="job">
                        job
                      </option>
                      <option value="other" key="other">
                        other
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-1 gap-3">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Төлбөрийн мэдээлэл
            </h2>
            <div className="grid grid-cols-2 shadow-lg p-5 rounded-3xl border-2 gap-5 mt-16">
              <div className="col-span-1">huleen avagch</div>
              <div className="col-span-1 font-semibold">Трифт shop</div>
              <div className="col-span-1"> dans</div>
              <div className="col-span-1 font-semibold">504809876</div>
              <div className="col-span-1">une</div>
              <div className="col-span-1 font-semibold">{order.price}</div>
              <div className="col-span-1"> hurgelt</div>
              <div className="col-span-1 font-semibold">5000</div>
              <div className="col-span-2 border-t-2 grid grid-cols-2 pt-3">
                <div className="col-span-1 font-semibold"> niit une</div>
                <div className="col-span-1 font-bold">{orderPrice}</div>
              </div>
            </div>
            <button
              className="bg-[#15d2d3] rounded-3xl py-3 w-full my-5"
              type="button"
              onClick={handleSubmit}
            >
              hudaldan avah
            </button>
            <button className="bg-[#ff598f] rounded-3xl py-3 w-full">
              butsah
            </button>
          </div>
        </div>
        {/* <Navbar /> */}
        {/* <Three/> */}
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
