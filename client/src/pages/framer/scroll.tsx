import Layout from "@/components/Layout";
import Image from "next/image";
import { useEffect } from "react";

export default function Scroll() {
  return (
    <>
      <Layout>
        <h2 className="">nemelt medeelel</h2>
        <div className="grid grid-cols-2">
          <Image
            src="https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295"
            data-aos="fade-right"
            alt="image"
            width={1000}
            height={100}
            className="rounded-lg"
          />
          <div className="mx-auto my-auto" data-aos="fade-left">
            description
          </div>
          <div className="mx-auto my-auto" data-aos="fade-right">
            description{" "}
          </div>

          <Image
            src="https://my.neighbor.org/wp-content/uploads/2020/08/reasons-to-buy-from-thrift-stores-960x640.jpg"
            data-aos="fade-left"
            alt="image"
            width={1000}
            height={100}
            className="rounded-lg"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295"
            data-aos="fade-right"
            alt="image"
            width={1000}
            height={100}
            className="rounded-lg"
          />
          <div className="mx-auto my-auto" data-aos="fade-left">
            description
          </div>
          <div className="mx-auto my-auto" data-aos="fade-right">
            description{" "}
          </div>

          <Image
            src="https://my.neighbor.org/wp-content/uploads/2020/08/reasons-to-buy-from-thrift-stores-960x640.jpg"
            data-aos="fade-left"
            alt="image"
            width={1000}
            height={100}
            className="rounded-lg"
          />
        </div>
      </Layout>
    </>
  );
}
