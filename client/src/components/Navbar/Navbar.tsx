import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { FiPlusCircle, FiUser, FiHeart } from "react-icons/fi";
import NavbarDropdown from "../NavbarDropdown";
import axios from "axios";

const navigation = [
  {
    name: "эрэгтэй",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublinks: [
          { name: "Өмд", link: "/categories" },
          {
            name: "Гутал",
            link: "/membersPrice",
          },
          {
            name: "Цүнх",
            link: "/tmz-company",
          },
          {
            name: "Аксессуар",
            link: "/membersCpta",
          },
        ],
      },
    ],
  },
  { name: "эрэгтэй", href: "/categories", current: false },
  { name: "эмэгтэй", href: "/categories", current: false },
  { name: "хүүхэд", href: "/categories", current: false },
  { name: "бусад", href: "/categories", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

export default function Navbar() {
  const [search, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);
  const handleSearch = (e: any) => {
    fetch(`http://localhost:8000/products?limit=12&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
    setSearchTerm(e.target.value);
    console.log("search", search);
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
        // className={`z-10 fixed w-full ${isSticky ? styles.sticky : ""}`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
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
                    </a>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <TextInput
                    id="text"
                    type="text"
                    rightIcon={HiSearch}
                    placeholder="haih"
                    required={true}
                    className="w-full mx-3 md:w-96 max-sm:hidden text-black"
                    value={search}
                    onChange={(e): void => {
                      handleSearch(e);
                    }}
                  />

                  <Link href={"/products/add"}>
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
                  <Link href={"/my/profile"}>
                    <button
                      type="button"
                      className="rounded-full text-black hover:pb-5 text-lg p-3"
                    >
                      <FiUser />
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-black"
                          : "text-black-300 hover:bg-gray-100",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <div>{item.name}</div>
                      <Dropdown label={item.name} inline={true}>
                        <Dropdown.Item>angilal</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>huvtsas</Dropdown.Item>
                      </Dropdown>
                    </Link>
                  ))}
                </div>
              </div> */}
              <div>
                <ul className="flex max-w-[1299px] items-center gap-10 mx-auto text-black text-xs-medium py-5 relative">
                  {navigation.map((link, index) => {
                    // const isFull = link.sublinks?.length >= 2;
                    return (
                      <li
                        key={`menu-id-${index}`}
                        className={`flex items-center gap-1 group cursor-pointer`}
                      >
                        {link.name}
                        {link.submenu && (
                          <NavbarDropdown
                            links={link.sublinks}
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

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            <TextInput
              id="email4"
              type="email"
              rightIcon={HiSearch}
              placeholder="haih"
              required={true}
              className="w-full sm:hidden text-black"
            />
          </>
        )}
      </Disclosure>
    </>
  );
}
