import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Layout from "@/components/Layout";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@/interfaces/product";
import { useRouter } from "next/router";
import { useQuery } from "@/hooks/useQuery";
import ProductCard from "@/components/ProductCard";
import { Select } from "@/components/ui/Select";
import { log } from "console";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { MyContext } from "@/components/context/Searchcontext";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { query } = context;

//   const {
//     ordering = "",
//     limit = 25,
//     search = "",
//     page = 0,
//     category = "",
//   } = query;
//   const response = await axios.get(
//     process.env.API_URL + `/products?limit=${limit}&search=${search}&ordering=${ordering}&category=${category}`
//   );
//   const { data } = response;
//   return {
//     props: { data },
//   };
// }

export default function Category({ data }: { data: IProduct }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { searchValue, setSearchValue } = useContext(MyContext);
  // const products = data;
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { query } = router;
  const {
    ordering = "",
    limit = 25,
    search = searchValue,
    page = 0,
    category = "",
  } = query;
  const { addQuery } = useQuery();
  useEffect(() => {
    axios
      .get(
        process.env.API_URL +
          `/products?limit=${limit}&search=${search}&ordering=${ordering}&category=${category}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [category, limit, ordering, products, search]);
  useEffect(() => {
    axios
      .get(process.env.API_URL + `/products?search=ki&limit=1`)
      .then((res) => {
        console.log("category data", res.data);
      });
  }, []);

  useEffect(() => {
    axios.get(process.env.API_URL + "/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Layout>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      {/* <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul> */}

                      {categories.map((section: any) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.categoryName}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.subCategories.map((option: any) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <Link
                                        className="pl-5 focus:text-black text-[rgba(0,0,0,.5)] hover:text-black"
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          console.log("target", option.name);
                                          addQuery({
                                            category: option.sub_id,
                                          });
                                        }}
                                      >
                                        {option.name}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <Select
                  items={[
                    { value: "", label: "Sort..." },
                    { value: "old", label: "Oldest" },
                    { value: "young", label: "Newest" },
                    { value: "imdbRatingDesc", label: "Most popular" },
                    { value: "titleAsc", label: "A-Z" },
                    { value: "titleDesc", label: "Z-A" },
                  ]}
                  onChange={(e) => {
                    addQuery({ ordering: e.target.value });
                  }}
                  value={ordering + ""}
                  itemValue={"value"}
                  itemLabel={"label"}
                />
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  {/* <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul> */}

                  {categories.map((section: any) => (
                    <Disclosure
                      as="div"
                      key={section._id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.categoryName}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.subCategories.map((option: any) => (
                                <div
                                  key={option.sub_id}
                                  className="flex items-center"
                                >
                                  <Link
                                    className="pl-5 focus:text-black text-[rgba(0,0,0,.5)] hover:text-black"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log("target", option.name);
                                      addQuery({
                                        category: option.sub_id,
                                      });
                                    }}
                                  >
                                    {option.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3  xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product: IProduct) => (
                      <ProductCard product={product} key={product._id} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
