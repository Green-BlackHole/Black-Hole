import Image from "next/image";
import { useState } from "react";

const Buteegdehuun = () => {
  const [image, setImage] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab667495-b177-4f02-b772-648da389161e/air-max-95-mens-shoes-4Nzc1w.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b8bbaf8-9676-4dc5-be2c-5331fd767799/air-max-95-mens-shoes-4Nzc1w.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e56c8f4-0adf-488a-a342-4ad8b08d98a1/air-max-95-mens-shoes-4Nzc1w.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/19fe5c3a-12fd-4238-9097-370cb84d76ef/air-max-95-mens-shoes-4Nzc1w.png",
  });

  const [activeImg, setActiveImg] = useState(image.img1);
  const [shirheg, setShirheg] = useState(1);

  return (
    <div className=" m-8 flex flex-col justify-between lg:flex-row gap-16 lg:items-start">
      <div className="flex flex-col gap-6 lg:w-2/4">
        {/* eronhii zurag */}
        <Image
          className="w-full h-full aspect-square object-cover"
          width={1000}
          height={100}
          src={activeImg}
          alt="logo"
        />
        {/* tuslah zuraguud */}
        <div className="flex flex-row justify-between h-24">
          <Image
            className="h-24 w-24 rounded-md cursor-pointer"
            width={100}
            height={100}
            alt="logo"
            src={image.img1}
            onClick={() => setActiveImg(image.img1)}
          />
          <Image
            className="h-24 w-24 rounded-md cursor-pointer"
            width={100}
            height={100}
            alt="logo"
            src={image.img2}
            onClick={() => setActiveImg(image.img2)}
          />
          <Image
            className="h-24 w-24 rounded-md cursor-pointer"
            width={100}
            height={100}
            alt="logo"
            src={image.img3}
            onClick={() => setActiveImg(image.img3)}
          />
          <Image
            className="h-24 w-24 rounded-md cursor-pointer"
            width={100}
            height={100}
            alt="logo"
            src={image.img4}
            onClick={() => setActiveImg(image.img4)}
          />
        </div>
      </div>

      {/* tailbar heseg */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="font-semibold text-violet-400">Special product</span>
          <h1 className="text-3xl font-bold">Nike Special</h1>
        </div>
        <p>Категори: Гутал</p>
        <p>Хэмжээ: М</p>
        <p>Барааны төлөв: Идэхтэй</p>
        <p>Зар оруулсан огноо: 2023-05-05</p>
        <p>Хүргэлтийн үнэ: 5000₮</p>
        <p className="text-gray-700">
          Flex your style in the Air Max 95 QS. Taking inspiration from the
          human body and 90s track aesthetics, it taps into The Anatomy of Air
          with a healthy dose of muscle-inspired colors. And if thats not
          enough, the iconic side panels (done in premium suede) feature deco
          stitching for a fibrous texture thats more head turning than those gym
          rats pumping iron.
        </p>
        <h5 className="text-2xl font-semibold">$ 199.99</h5>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-400 py-2 px-4 rounded-lg text-violet-600 text-3xl"
              onClick={() => setShirheg((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{shirheg}</span>
            <button
              className="bg-gray-400 py-2 px-5 rounded-lg  text-violet-600 text-3xl"
              onClick={() => setShirheg((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl h-full">
            Add card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buteegdehuun;
