import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

// export class Product {}

@Schema({ collection: 'product' })
export class Product {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop({ required: true })
  id: number;
  name: string;
  price: string;
  imageSrc: string;

  @Prop()
  size: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
