import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(_id: string) {
    return await this.ProductModel.findOne({ _id });
  }
  async findMyProducts(id: string): Promise<Product[]> {
    return await this.ProductModel.find({ userId: id });
  }
  async findMyProductsCount(id: string): Promise<number> {
    return await this.ProductModel.find({ userId: id }).count({});
  }
  async findFalse(status: boolean): Promise<Product[]> {
    return await this.ProductModel.find({ status: status });
  }
  async findTrue(status: boolean): Promise<Product[]> {
    return await this.ProductModel.find({ status: status });
  }

  async findAllCount() {
    return await this.ProductModel.find().count({});
  }

  // update(id: string, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.ProductModel.findByIdAndUpdate(
      id,
      updateProductDto,
      {
        new: true, // Return the updated document
      },
    ).exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return updatedProduct;
  }

  async remove(_id: string) {
    return await this.ProductModel.findByIdAndRemove(_id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOneId(_id: string) {
    const result = await this.ProductModel.find().select({ _id: 1 });

    return result.map((movieId) => movieId._id);
    console.log(result);
  }
}
