import Image from "next/image";

export default function SpecialCategory(){
  return(
  <>
  <h2 className="font-bold text-2xl mt-10">Онцлох ангилал</h2>
  <div className="grid grid-cols-6 gap-3 mt-5">
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
    <Image src="https://o.remove.bg/downloads/23c32dbe-0180-42c1-99b8-4fc8b27efeb2/PLP_Hero_1080x1350_SP23_EasyTote_DarkCoral_Hero_2785-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
    <p className="pb-4">category name</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="https://o.remove.bg/downloads/0d54721e-2848-4fa2-838c-7a539756a2e3/M9160_A_08X1-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
  <p className="pb-4">category name</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="https://o.remove.bg/downloads/00010d8a-7fea-4aee-bd15-bb88af9bab4d/w358_q60-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
  <p className="pb-4">category name</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
    <Image src="https://o.remove.bg/downloads/e68dce3c-cb89-4cd1-9bed-5f99aad59a9d/30010-800x1000-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
    <p className="pb-4">category name</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="https://o.remove.bg/downloads/c07e5f42-aa20-463b-9257-ce30fddf2030/de4fd5d97a18531e547de4e149b44f15-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
  <p className="pb-4">category name</p>
  </div>
  <div className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
  <Image src="https://o.remove.bg/downloads/6f2e31a9-8f3a-4978-9c23-2ef226685d85/prod24-removebg-preview.png" alt="category bag" width={1000} height={100} className="max-h-[200px] object-cover"/>
  <p className="pb-4">category name</p>
  </div>
  </div>
  </>)
}