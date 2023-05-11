import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema()
export class Category {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  href: string;

  createdAt: Date;
  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
