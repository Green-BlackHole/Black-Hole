import Image from "next/image";

const Reklam = () => {
  return (
    <>
      <h2 className=" text-3xl">Reklam</h2>
      <div className="w-full">
        <Image
          width="1000"
          height={50}
          src="https://cdn.shopify.com/s/files/1/2959/1636/collections/BUTTON_TEMP_7f39ac4e-415c-4cef-a6e5-d5f07895d543-988799_1430x530.png?v=1671739599"
          alt="nike"
          className="w-full"
        />
      </div>
    </>
  );
};

export default Reklam;
