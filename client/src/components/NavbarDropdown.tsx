import Link from "next/link";
import React, { FC } from "react";

interface SubLinkChild {
  name: string;
  link: string;
}

interface SubLink {
  Head: string;
  sublinks: SubLinkChild[];
}

interface NavbarDropdownProps {
  links: SubLink[];
  isFull?: boolean;
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ links, isFull }) => {
  return (
    <>
      <div>
        <div
          className={`absolute top-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 hover:block left-0 z-[999] transition-all duration-300 ease-linear         ${
            isFull && "right-0"
          }`}
        >
          <div className="py-3">
            {/* <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45" /> */}
          </div>
          <div className="bg-white text-head p-3.5 shadow-shadow-1 ">
            <ul className="flex justify-around gap-6 ">
              {links.map((mysublinks, index) => (
                <div
                  key={`dropdown-${index}`}
                  className="flex flex-col items-start gap-5 whitespace-nowrap"
                >
                  <h1 className="hover:text-white/70 uppercase text-xl border-b w-full border-indigo-500 ">
                    {mysublinks.Head}
                  </h1>
                  {mysublinks.sublinks.map((slink, index) => (
                    <li
                      className="hover:duration-300 text-md-medium "
                      key={`mysublinks-${index}`}
                    >
                      <Link
                        href={slink.link}
                        className="hover:text-head normal-case hover:text-md hover:border-b-2 hover:border-indigo-500 hover:transition hover:duration-300 hover:ease-in-out"
                      >
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarDropdown;
