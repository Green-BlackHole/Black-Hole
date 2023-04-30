import { useState } from "react";
import { Tab } from "@headlessui/react";
import Layout from "@/components/Layout";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    signin: [
      {
        htmlFor: "email",
        title: "Email Address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
      },
      {
        htmlFor: "password",
        title: "Password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
      },
    ],
    signup: [
      {
        htmlFor: "email",
        title: "Email Address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
      },
      {
        htmlFor: "password",
        title: "Password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
      },
      {
        htmlFor: "repassword",
        title: "repassword",
        id: "repassword",
        name: "repassword",
        type: "password",
        autoComplete: "repassword",
      },
    ],
  });

  return (
    <Layout>
        <div className="grid grid-cols-6 bg-[#e0e2e8]">
            <div className="flex justify-center col-span-3 items-center">
    <div className="w-2/3 max-w-md px-2 py-16 sm:px-0 ">

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 min-h-48">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <form>
                {posts.map((post) => (
                  <div className="sm:col-span-4">
                    <label
                      htmlFor={post.htmlFor}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {post.title}
                    </label>
                    <div className="mt-2">
                      <input
                        //  onChange={(e) => handleChange(e)}
                        id={post.id}
                        name={post.name}
                        type={post.type}
                        autoComplete={post.autoComplete}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="bg-indigo-500/100 w-full rounded-2xl py-1 my-2 cursor-pointer"
                >
                  submit
                </button>
              </form>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      </div>
    </div>
    <div className="col-span-3 ">
        <Image
            src='https://cdn11.bigcommerce.com/s-4yo3xyp5/images/stencil/640w/uploaded_images/redirecting-to-the-store-front-when-you-empty-the-cart.png?t=1581590644' 
            alt="shopping guy"   
            width={1000}
            height={1000}  
            className="w-full aspect-[12/8]"
        />
    </div>
    </div>
    </Layout>
  );
}
