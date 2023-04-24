import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

export default function Breadcrumd() {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className=" py-3 px-5"
    >
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
    </Breadcrumb>
  );
}
