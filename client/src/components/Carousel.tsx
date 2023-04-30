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
          src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000"
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
