export interface IProduct {
  map(arg0: (product: IProduct) => JSX.Element): import("react").ReactNode;
  productImageSrc: string;
  brand: string;
  _id: string;
  name: string;
  href: string;
  category: string;
  option: string;
  about: string;
  imageAlt: string;
  price: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  userId: any;
  productState: string;
  streetAddress: string;
  phoneNumber: string;
}
export interface IOption {
  name: string;
  href: string;
  sub_id: number;
}
export interface ICategory {
  categoryName: string;
  _id: string;
  subCategories: string;
  sub_id: number;
  name: string;
  href: string;
}
export interface IMyContext {
  search: string;
  setSearch: string;
}
