import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

// export class Product {}

@Schema({ timestamps: true })
export class Order {
  @Prop({ default: () => nanoid() })
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  email: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  streetAddress: string;
  @Prop()
  city: string;
  @Prop()
  region: string;
  @Prop()
  productImageSrc: string;
  @Prop()
  price: string;
  @Prop()
  userId: string;
  @Prop()
  productId: string;
  @Prop()
  status: boolean;
  @Prop()
  createdAt: Date;
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
