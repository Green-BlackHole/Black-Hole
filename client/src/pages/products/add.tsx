import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function Example() {
  const { currentUser }: { currentUser: any } = useCurrentUser();
  if (!currentUser) {
    return <>Ta nevtreegui baina!</>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageUrl, setImageUrl] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [addProduct, setAddProduct] = useState({
    productImageSrc: "",
    brand: "",
    category: "",
    size: "",
    name: "",
    about: "",
    streetAddress: "",
    phoneNumber: "",
    price: "",
    userId: currentUser?._id,
    status: false,
  });
  const uploadImg = (e) => {
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
  };

  return (
    <Layout>
      <div className="container max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className=" gap-5">
            {/* <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      onChange={uploadImg}
                      id="file-upload"
                      name="imageUpload"
                      type="file"
                      className="sr-only required:border-red-500"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={imageUrl}
              alt="image"
              width={100}
              height={100}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";
              }}
            /> */}
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
                src={imageUrl}
                alt="add product image"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png";
                }}
              />
              <input
                type="file"
                onChange={uploadImg}
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
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              category
            </label>
            <div className="mt-2">
              <select
                onChange={(e: any) => handleChange(e)}
                id="country"
                name="category"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="huvtsas">huvtsas</option>
                <option value="gutal">gutal</option>
                <option value="malgai">malgai</option>
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
