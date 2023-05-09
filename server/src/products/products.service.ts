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

  async findOne(_id: string) {
    return await this.ProductModel.findOne({ _id });
  }
  async findMyProducts(id: string): Promise<Product[]> {
    return await this.ProductModel.find({ userId: id });
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

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOneId(_id: string) {
    const result = await this.ProductModel.find().select({ _id: 1 });

    return result.map((movieId) => movieId._id);
    console.log(result);
  }

  // findAllMovieIds = async (req: Request, res: Response) => {
  //   const result = await MovieModel.find().select({ id: 1 });
  //   res.json(result.map((movieId) => movieId._id));
  // };
}
