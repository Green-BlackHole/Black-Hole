import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as cloudinary from 'cloudinary';
import * as multer from 'multer';
import { nanoid } from 'nanoid';

import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, '/tmp');
        },
        filename: (req, file, cb) => {
          const fileName = nanoid();
          const splittedPath = file.originalname.split('.');
          const fileExtention = splittedPath[splittedPath.length - 1];
          cb(null, `${fileName}.${fileExtention}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await cloudinary.v2.uploader.upload(file.path);
    return result;
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('ordering') ordering: string,
    @Query('skip') skip: number,
    @Query('search') search: string,
    @Query('category') category: string,
  ): Promise<Product[]> {
    let sort = '';
    switch (ordering) {
      case 'old':
        sort = 'createdAt';
        break;
      case 'young':
        sort = '-createdAt';
        break;
      case 'titleAsc':
        sort = 'name';
        break;
      case 'titleDesc':
        sort = '-name';
        break;
      default:
        sort = '-released';
        break;
    }

    const condition: any = {};

    if (category) {
      condition.option = { $regex: new RegExp(`${category}`, 'i') };
    }

    if (search) {
      condition.name = { $regex: new RegExp(`${search}`, 'i') };
    }

    return this.productsService.findAll(
      Number(limit),
      Number(skip),
      sort,
      condition,
    );
  }
  @Get('ids/:id')
  findMyProducts(@Param('id') id: string): Promise<Product[]> {
    return this.productsService.findMyProducts(id);
  }
  @Get('false/:id')
  findFalse(@Param('id') status: boolean): Promise<Product[]> {
    return this.productsService.findFalse(status);
  }
  @Get('true/:id')
  findTrue(@Param('id') status: boolean): Promise<Product[]> {
    return this.productsService.findTrue(status);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.productsService.findOne(_id);
  }
  @Get(':idm/id')
  findOneId(@Param('_id') _id: string) {
    return this.productsService.findOneId(_id);
  }

  @Get('co/count')
  async findAllCount() {
    return await this.productsService.findAllCount();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
