import { useQuery } from "@/hooks/useQuery";
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
  const { addCategoryQuery } = useQuery();

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
            <ul className="flex flex-col justify-around">
              {links.map((mysublinks: any, index) => (
                <div
                  key={`dropdown-${index}`}
                  className="flex flex-col items-start gap-5 whitespace-nowrap"
                >
                  <h1 className="hover:text-white/70 uppercase text-xl w-full ">
                    {mysublinks.Head}
                  </h1>
                  {/* {mysublinks.sublinks.map((slink, index) => ( */}
                  <li
                    className="hover:duration-300 text-md-medium "
                    key={`mysublinks-${index}`}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        addCategoryQuery({
                          category: mysublinks.sub_id,
                        });
                      }}
                      className="w-full text-[rgba(0,0,0,.5)] normal-case hover:text-md hover:text-black hover:transition hover:duration-300 hover:ease-in-out"
                    >
                      {mysublinks.name}
                    </a>
                  </li>
                  {/* ))} */}
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
