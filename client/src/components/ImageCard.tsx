import Image from "next/image";

const ImageCard = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl ">Gallery</h2>
        <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <Image
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-LJmK45.png"
              alt="nike"
              width={1000}
              height={100}
              className="w-full h-[700] bg-cover object-cover"
            />
          </div>
          <div className="grid gap-6 grid-cols-2">
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
