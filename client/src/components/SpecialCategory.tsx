import Image from "next/image";

export default function SpecialCategory(){
  return(
  <>
  <h2 className="font-bold text-2xl mt-10">Онцлох ангилал</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
    <Image src="/images/hoodie.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover  "/>
    <p className="pb-4">цамц</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="/images/pants.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover"/>
  <p className="pb-4">өмд</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="/images/shoes.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover"/>
  <p className="pb-4">гутал</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
    <Image src="/images/dress.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover"/>
    <p className="pb-4">даашинз</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="/images/bag.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover"/>
  <p className="pb-4">цүнх</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="/images/smartwatch.png" alt="category bag" width={1000} height={100} className="w-[200px] h-[200px] object-cover"/>
  <p className="pb-4">цаг</p>
  </div>
  </div>
  </>)
}
