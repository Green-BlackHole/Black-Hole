import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

export default function signup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
    repassword: "",
    name: "",
    phoneNumber: "",
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/signup", user)
      .then((res) => {
        console.log(res.data);
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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid grid-cols-6 items-center ">
        <div className="col-span-3 max-md:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="w-2/3 mx-auto border rounded-2xl p-5
       shadow-2xl"
          >
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                нэр
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Утасны дугаар
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  autoComplete="phoneNumber"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
            <div className="sm:col-span-4">
              <label
                htmlFor="repassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                repessword
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="repassword"
                  name="repassword"
                  type="password"
                  autoComplete="repassword"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-400/100 w-full rounded-2xl py-1 cursor-pointer my-7"
            >
              бүртгүүлэх
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
