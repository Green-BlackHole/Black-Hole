import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { IOption } from "@/interfaces/product";

export default function Example() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return <>Ta nevtreegui baina!</>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageUrl, setImageUrl] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [subCategories, setSubCategories] = useState<IOption[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategory(res.data);
    });
  }, [category, setCategory]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [addProduct, setAddProduct] = useState({
    productImageSrc: "",
    brand: "",
    category: "",
    option: "",
    size: "",
    name: "",
    about: "",
    streetAddress: "",
    phoneNumber: "",
    price: "",
    userId: currentUser?._id,
    status: true,
    productState: "",
  });
  const uploadImg = (e: any) => {
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios
      .post("http://localhost:8000/products/upload", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImageUrl(res.data.secure_url);
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/products/add", addProduct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
      productImageSrc: imageUrl,
    });
    if (e.target.name === "category") {
      const subCategory = category.find(
        (cat: any) => cat.categoryName == e.target.value
      ) || { subCategories };
      setSubCategories(subCategory.subCategories);
    }
  };
  console.log("sub categorie:", subCategories);

  return (
    <Layout>
      <div className="container max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className=" gap-5">
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ccc",
                overflow: "hidden",
                border: "1px solid #f0f0f0",
                position: "relative",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={1000}
                height={100}
                src={
                  imageUrl ||
                  "https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png"
                }
                alt="add product image"
              />
              <input
                type="file"
                onChange={uploadImg}
                multiple
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </div>

            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              category
            </label>
            <div className="mt-2">
              <select
                onChange={(e: any) => handleChange(e)}
                id="category"
                name="category"
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {category.map((c: any) => (
                  <option value={c.categoryName} key={c._id}>
                    {c.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <label
              htmlFor="option"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              second category
            </label>
            <div className="mt-2">
              <select
                onChange={(e: any) => handleChange(e)}
                id="option"
                name="option"
                autoComplete="option-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {subCategories.map((item) => (
                  <option value={item.sub_id} key={item.sub_id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <label
              htmlFor="productState"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              product state
            </label>
            <div className="mt-2">
              <select
                onChange={(e: any) => handleChange(e)}
                id="productState"
                name="productState"
                autoComplete="productState"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="songoh">сонгох</option>
                <option value="100%">shine (100%)</option>
                <option value="80%">tseverhen hereglesen (80%+)</option>
                <option value="60%">bolomjiin(60%+)</option>
              </select>
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="brand"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              hemjee
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="size"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Baraanii ner
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 required:border-red-500"
              />
            </div>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                id="about"
                name="about"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              hayg
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="streetAddress"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              utasnii dugaar
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="phoneNumber"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              une
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="price"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                baraa nemeh
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
