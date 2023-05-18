import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  about: string;
  brand: string;
  category: string;
  option: string;
  name: string;
  phoneNumber: string;
  price: number;
  size: string;
  streetAddress: string;
  productImageSrc: string;
  userId: string;
  statis: boolean;
  productState: string;
}
