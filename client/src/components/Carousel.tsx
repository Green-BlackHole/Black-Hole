import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

interface Props {
  slideInterval: number;
}

const MyCarousel: React.FC<Props> = ({ slideInterval }) => {
  return (
    
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slideInterval={slideInterval}>
        <Image
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm309-aew-013_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2724bd9481a065ee24e7e7eaaabf1c55"
          alt="..."
          width={1000}
          height={1000}
          className="bg-cover object-cover "
        />
        <Image
          src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000"
          alt="..."
          width={1000}
          height={1000}
          className="bg-cover object-cover"
        />
        <Image
          src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000"
          alt="..."
          width={1000}
          height={1000}
          className="bg-cover object-cover"
        />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
