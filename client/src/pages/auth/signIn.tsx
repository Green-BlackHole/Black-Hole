import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

export default function Signin() {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const status = 201;
    axios
      .post("http://localhost:8000/signin", user)
      .then((res) => {
        if (status === res.status) {
          console.log("status", res);

          router.push("/");
          // console.log("res data is", res.data);
          localStorage.setItem("token", res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout>
      <div className="container grid grid-cols-6  items-center ">
        <div className="col-span-3 max-md:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="w-2/3 mx-auto border rounded-2xl p-5
       shadow-2xl"
          >
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-400/100 w-full rounded-2xl py-1 cursor-pointer my-7"
            >
              нэвтрэх
            </button>
          </form>
        </div>
        <div className="col-span-3 max-md:col-span-6">
          <Image
            src={
              "https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
            }
            alt={"signup imaged"}
            width={1000}
            height={100}
          />
        </div>
      </div>
    </Layout>
  );
}
