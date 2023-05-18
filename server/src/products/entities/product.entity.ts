import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

// export class Product {}

@Schema({ timestamps: true })
export class Product {
  @Prop({ default: () => nanoid() })
  _id: string;
  @Prop()
  userId: string;
  @Prop()
  status: boolean;
  @Prop()
  category: string;
  @Prop()
  option: string;
  @Prop()
  productState: string;
  @Prop()
  about: string;
  @Prop()
  brand: string;
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  productImageSrc: string;
  @Prop()
  size: string;
  @Prop()
  streetAddress: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
