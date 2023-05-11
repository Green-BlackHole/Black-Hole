import Layout from "@/components/Layout";
import axios from "axios";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
<<<<<<< HEAD
        router.push("/");
        // console.log("res data is", res.data);
        localStorage.setItem("token", res.data[0]);
        if (status === res.status) {
          console.log("status", res);
          localStorage.setItem("token", res.data[0]);
          toast.success("Amjilttai nevterlee", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/");
=======
        if (status === res.status) {
          console.log("status", res);

          router.push("/");
          // console.log("res data is", res.data);
          localStorage.setItem("token", res.data[0]);
>>>>>>> 5dd3e667e84d76356364f5d7ed68f25d3ec342c7
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Holbolt buruu baina", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
    <div className="bg-[url('/images/login5.png')] h-screen object-cover bg-cover">
      <div className="flex flex-row">
        <div className="basis-0 md:basis-1/4"></div>
        <div className="basis-0 md:basis-1/4"></div>

        <section className="basis-[100%] flex items-center bg-[rgba(0,0,0,.5)] md:basis-1/2 ">
          {/* login heseg */}
          <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center m-6 text-2xl font-semibold text-[#a09fd1]"
            >
              <Image
                className="w-8 h-8 mr-2 rounded-full"
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
              {/* <img className="w-8 h-8 mr-2" src="./logo.png" alt="logo" /> */}
              So-goos
            </a>
            <div className="w-full bg-[rgba(0,0,0,.5)] text-[#a09fd1] rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium ">
                      Your email
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="email"
                      name="email"
                      id="email"
                      className="border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium ">
                      Password
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>

                  <button className="w-full cursor-pointer">
                    <div className="flex items-center justify-center bg-[#FCF4FC] p-3 rounded-lg">
                      <div>
                        <FcGoogle />
                      </div>
                      <p className="text-black pl-4 font-bold">Google</p>
                    </div>
                  </button>

                  <button className="w-full cursor-pointer">
                    <div className=" flex items-center justify-center bg-[#FCF4FC] p-3 rounded-lg">
                      <div>
                        <BsFacebook className=" text-blue-600" />
                      </div>
                      <p className="text-black pl-4 font-bold">Facebook</p>
                    </div>
                  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/auth/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>
=======
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
>>>>>>> 5dd3e667e84d76356364f5d7ed68f25d3ec342c7
      </div>
    </div>
  );
}
