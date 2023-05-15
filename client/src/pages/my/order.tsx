import { BsFillBoxSeamFill, BsBoxSeam } from "react-icons/bs";
import Aside from "./profile";

const Order = () => {
  return (
    <Aside>
      <div className="flex justify-center items-center my-10 py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <div>
          <BsFillBoxSeamFill className=" text-yellow-600" size={100} />
          {/* <BsBoxSeam className="bg-black" /> */}
        </div>
        <p className="text-slate-400 pl-6">Захиалга байхгүй байна</p>
      </div>
    </Aside>
  );
};

export default Order;
