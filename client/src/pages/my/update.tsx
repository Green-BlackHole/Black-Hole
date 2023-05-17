import Image from "next/image";
import Aside from "./profile";
import { useCurrentUser } from "@/components/CurretnUserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IUser } from "@/interfaces/user";

const Info = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const [user, setUser] = useState<IUser | any>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${currentUser?._id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e: any) => {
    const modifiedUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(modifiedUser);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/users/${currentUser?._id}`, user)
      .then((res) => {
        toast.success("amjilttai shinechillee");
      })
      .catch((err) => {
        toast.success("shinechlehed aldaa garlaa");
      });
  };
  return (
    <Aside>
      <section className=" rounded-lg gap-5 bg-white p-5">
        <div className="flex flex-col items-center">
          <div>
            <Image
              width={150}
              height={150}
              alt="profile"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="rounded-full"
            />
          </div>
          <div className="py-5 flex flex-col items-center text-gray-800 font-semibold">
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Хувийн мэдээлэл
          </h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Нэр
                </label>
                <input
                  onChange={(e: any) => handleChange(e)}
                  type="text"
                  name="name"
                  id="name"
                  value={user?.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="tani ner"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  onChange={(e: any) => handleChange(e)}
                  type="text"
                  name="email"
                  id="email"
                  value={user?.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="tani email"
                />
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  phone number
                </label>
                <input
                  onChange={(e: any) => handleChange(e)}
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={user?.phoneNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="tani utasnii dugaar"
                />
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-100 bg-slate-600 rounded-lg hover:bg-slate-800"
            >
              medeelel shinechleh
            </button>
          </form>
        </div>
      </section>
    </Aside>
  );
};

export default Info;
