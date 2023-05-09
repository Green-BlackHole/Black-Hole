export interface IProduct {
  productImageSrc: string;
  _id: string;
  name: string;
  href: string;
  category: string;
  about: string;
  imageAlt: string;
  price: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  userId: any;
  productState: string;
}
export interface IOption {
  name: string;
  href: string;
}
export interface ICategory {
  categoryName: string;
  _id: string;
  subCategories:string;
  name:string;
  href:string;
}
