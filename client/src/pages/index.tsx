import ProductCard from "@/components/ProductCard";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Reklam from "@/components/Reklam";
import Category from "@/components/Category";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { IProduct } from "@/interfaces/product";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@/hooks/useQuery";
import { useRouter } from "next/router";
import { Select } from "@/components/ui/Select";

const inter = Inter({ subsets: ["latin"] });
export const DataContext = createContext("search");
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 25, search = "", page = 0 } = query;
  const response = await axios.get(
    `http://localhost:8000/products?limit=12&search=${search}&ordering${ordering}`
  );
  const { data } = response;
  return {
    props: { data },
  };
}

export default function Home({ data }: { data: IProduct[] }) {
  const products = data;
  const router = useRouter();
  const { query } = router;
  const { ordering = "", limit = 25, search = "", page = 0 } = query;
  console.log(query);
  const { addQuery } = useQuery();

  return (
    <>
      <DataContext.Provider value={search}>
        <Layout>
          <Carousel slideInterval={3000} />
          <div className="bg-white">
            <Select
              items={[
                { value: "", label: "Sort..." },
                { value: "name", label: "Oldest" },
                { value: "releasedDesc", label: "Newest" },
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

            <Select
              items={[
                { value: "6", label: "6" },
                { value: "12", label: "12" },
                { value: "24", label: "24" },
                { value: "48", label: "48" },
              ]}
              onChange={(e) => {
                addQuery({ limit: e.target.value });
              }}
              value={limit + ""}
              itemValue={"value"}
              itemLabel={"label"}
            />
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>

          <ImageCard />
          <Reklam />
        </Layout>
      </DataContext.Provider>
    </>
  );
}
