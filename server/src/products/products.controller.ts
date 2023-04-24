import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('limit') limit: number,
    @Query('ordering') ordering: string,
    @Query('skip') skip: number,
    @Query('q') q: string,
  ): Promise<Product[]> {
    let sort = '';
    switch (ordering) {
      case 'releasedAsc':
        sort = 'released';
        break;
      case 'awardsWinsDesc':
        sort = '-awards.wins';
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

    if (q) {
      condition.category = q;
    }

    if (q) {
      condition.name = { $regex: new RegExp(`${q}`, 'i') };
    }

    return this.productsService.findAll(
      Number(limit),
      Number(skip),
      sort,
      condition,
    );
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
