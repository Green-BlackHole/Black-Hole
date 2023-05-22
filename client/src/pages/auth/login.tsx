import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Tilt from "react-parallax-tilt";

export default function Login() {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const status = 201;
    axios
      .post(process.env.API_URL + "/signin", user)
      .then((res) => {
        if (status === res.status) {
          router.push("/");
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
          axios
            .get(process.env.API_URL + "/currentUser", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              setCurrentUser(res.data);
              console.log("user-iig set hiilee..", res.data);
            })
            .catch((e) => {
              console.error(e);
              setCurrentUser(undefined);
            });
          router.push("/");
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
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <Image
            className="w-full h-full object-cover bg-cover"
            src="/images/login.png"
            alt="login"
            width={1000}
            height={100}
          />
        </div>

        <div className="bg-gray-50 flex flex-col justify-center">
          <Tilt transitionSpeed={10000}>
            <form
              className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8"
              onSubmit={handleSubmit}
            >
              <h2 className="text-4xl text-slate-700 font-bold text-center">
                SIGN IN
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                <label>email</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="email"
                  className="rounded-lg bg-gray-50 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none"
                  type="text"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="password"
                  className="rounded-lg bg-gray-50 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center">
                  <input className="mr-2" type="checkbox" /> Remember Me
                </p>
                <p>Forgot Password</p>
              </div>
              <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-slate-900 font-semibold rounded-lg">
                SIGN IN
              </button>

              <button className="w-full cursor-pointer my-5">
                <div className="flex items-center justify-center bg-white p-3 rounded-lg">
                  <div>
                    <FcGoogle />
                  </div>
                  <p className="text-black pl-4 font-bold">Google</p>
                </div>
              </button>

              <button className="w-full cursor-pointer mb-3">
                <div className=" flex items-center justify-center bg-white p-3 rounded-lg">
                  <div>
                    <BsFacebook className=" text-blue-600" />
                  </div>
                  <p className="text-black pl-4 font-bold">Facebook</p>
                </div>
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </Tilt>
        </div>
      </div>
      <Footer />
    </>
  );
}
