import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly ProductModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.ProductModel(createProductDto);
    console.log(createProductDto);
    return createdProduct.save();
  }

  async findAll(
    limit: number,
    skip: number,
    sort: string,
    condition: any,
  ): Promise<Product[]> {
    return await this.ProductModel.find(condition)
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .exec();
  }

  async findOne(id: string) {
    return await this.ProductModel.findOne({ _id: id });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
