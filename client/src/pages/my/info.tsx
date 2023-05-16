import Image from "next/image";
import Aside from "./profile";
import { CgLock, CgProfile } from "react-icons/cg";
import Link from "next/link";

const Info = () => {
  return (
    <Aside>
        <section className=" rounded-lg grid grid-cols-2 gap-5">
          <div className="col-span-1 rounded-lg p-5 bg-white">
            <Image
              width={150}
              height={150}
              alt="profile"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="rounded-full mx-auto"
            />
            <h2 className="font-bold">email</h2>
            <button>zurag shinechleh</button>
            </div>
            <div className="col-span-1 flex flex-col rounded-lg gap-5">
              <div className="bg-white h-1/2 p-5 rounded-lg flex items-center justify-between">

                <div className="font-bold">
                <CgProfile size={30} className="min-w-max pr-2 mb-2" />
                Хувийн мэдээлэл
                </div>
              <Link href="update">

                <p className="text-sm">shinechleh</p>
                </Link>

                </div>

                <div className="bg-white h-1/2 p-5 rounded-lg flex items-center justify-between">
                <div className="font-bold">
                <CgLock size={30} className="min-w-max pr-2 mb-2" />
                Цахим хаяг
                </div>
                <p className="text-sm">batalgaajsan</p>

                </div>
            </div>
        
        </section>
    </Aside>
  );
};

export default Info;
