import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-purple-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:justify-between gap-3">
            {/* Logo */}
            <div className="flex justify-between">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src="/images/logo2.png"
                    className="mr-3 h-8 rounded-full"
                    alt="logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    So-goos
                  </span>
                </Link>
              </div>
            </div>

            {/* Hayag */}

            <div className="flex justify-end justify-self-end basis-[70%]">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Хаяг
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар
                      хот, Монгол улс NewHorizon center - 401 тоот
                    </li>
                  </ul>
                </div>

                {/* Huvaar */}
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Цагийн хуваарь
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">11:00 - 18:00 (ажлын өдөр)</li>
                    <li>11:00 - 17:00 (амралтын өдөр)</li>
                  </ul>
                </div>

                {/* Holboos */}
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Холбоосууд
                  </h2>
                  <ul className=" text-gray-600 dark:text-gray-400">
                    <li className="mb-4">+976 99112233</li>
                    <li className="flex  mt-4 space-x-6  sm:mt-0">
                      <Link
                        href="https://www.facebook.com/profile.php?id=100092222750593"
                        target="https://www.facebook.com/profile.php?id=100092222750593"
                      >
                        <BsFacebook />
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="https://www.instagram.com/"
                      >
                        <BsInstagram />
                      </Link>
                      <Link
                        href="https://www.youtube.com/"
                        target="https://www.youtube.com/"
                      >
                        <BsYoutube />
                      </Link>
                    </li>

                    {/* <ul className="flex justify-between mt-4 space-x-6 sm:justify-center sm:mt-0"></ul> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/* Reserved */}
          <div className="text-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="#" className="hover:underline">
                So-goos™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
