import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { FiPlusCircle, FiUser, FiHeart } from "react-icons/fi";
import NavbarDropdown from "../NavbarDropdown";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../context/Searchcontext";
import { useRouter } from "next/router";
import { useQuery } from "@/hooks/useQuery";
import { useCurrentUser } from "../CurretnUserProvider";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

export default function Navbar() {
  const { addCategoryQuery } = useQuery();
  const router = useRouter();
  // const [search, setSearchTerm] = useRecoilState<any>(value);
  const { searchValue, setSearchValue } = useContext(MyContext);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState("");
  const { currentuser }: any = useCurrentUser();
  const placeholder = ` ${count} бараа байна`;
  useEffect(() => {
    axios.get( process.env.API_URL + "/products/all/count").then((res) => {
      setCount(res.data);
    });
  }, [count]);
  useEffect(() => {
    axios.get( process.env.API_URL + "/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
    console.log("search", searchValue);
  };

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // className={`fixed w-full ${isSticky ? styles.sticky : ""}`}

  return (
    <>
      <Disclosure
        as="nav"
        className={`z-10 sticky top-0 w-full bg-white`}
        // className={`z-10 fixed w-full bg-[rgba(255,255,255,.3)] ${isSticky ? styles.sticky : ""} `}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>

                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                      onClick={() => setMobileFiltersOpen(true)}
                    />
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <Image
                        className="block h-10 w-auto lg:hidden"
                        src="/images/logo.png"
                        alt="Your Company"
                        width={100}
                        height={100}
                      />
                      <Image
                        className="hidden h-10 w-auto lg:block"
                        src="/images/logo.png"
                        alt="Your Company"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <TextInput
                    id="text"
                    type="text"
                    rightIcon={HiSearch}
                    placeholder={placeholder}
                    required={true}
                    className="w-full mx-3 md:w-96 max-sm:hidden text-black"
                    value={searchValue}
                    onChange={(e): void => {
                      handleSearch(e);
                    }}
                    onKeyDown={(
                      e: React.KeyboardEvent<HTMLInputElement>
                    ): void => {
                      if (e.key === "Enter") {
                        router.push("/categories");
                        addCategoryQuery({ search: e.currentTarget.value });
                      }
                    }}
                  />

                  <Link href={"/my/wish"}>
                    <button
                      type="button"
                      className="rounded-full text-black hover:pb-5 text-lg p-3"
                    >
                      <FiHeart />
                    </button>
                  </Link>
                  <Link href={"/products/add"}>
                    <button
                      type="button"
                      className="rounded-full text-black hover:pb-5 text-lg p-3"
                    >
                      <FiPlusCircle />
                    </button>
                  </Link>

                  {/* Profile dropdown */}
                  <Link href={"/my/info"}>
                    <button
                      type="button"
                      className="rounded-full text-black hover:pb-5 text-lg p-3"
                    >
                      {/* <FiUser /> */}
                      {!currentuser ? <FiUser /> : <p>signin</p>}
                    </button>
                  </Link>
                </div>
              </div>

              <div>
                <ul className="flex max-w-[1299px] items-center gap-10 mx-auto text-black text-xs-medium py-5 relative">
                  {category.map((link: any, index) => {
                    // const isFull = link.sublinks?.length >= 2;
                    return (
                      <li
                        key={`menu-id-${index}`}
                        className={`flex items-center gap-1 group cursor-pointer mx-2`}
                      >
                        {link.categoryName}
                        {true && (
                          <NavbarDropdown
                            links={link.subCategories}
                            // isFull={isFull}
                          />
                        )}
                        {/* <MdKeyboardArrowDown /> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <TextInput
              id="email4"
              type="email"
              rightIcon={HiSearch}
              placeholder="haih"
              required={true}
              className="w-full sm:hidden text-black"
              value={searchValue}
              onChange={(e): void => {
                handleSearch(e);
              }}
              onKeyDown={(e): void => {
                if (e.key === "Enter") {
                  router.push("/categories");
                }
              }}
            />
          </>
        )}
      </Disclosure>
      {/* mobile category */}
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
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
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

                  {category.map((section: any) => (
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
                                    href={"#"}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log("target", option.name);
                                      addCategoryQuery({
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
    </>
  );
}
