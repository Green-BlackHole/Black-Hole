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
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    // console.log('wishlist', createWishlistDto);
    return this.wishlistService.create(createWishlistDto);
  }

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.wishlistService.findOne(+id);
  // }
  @Get(':_id')
  findOne(
    @Param('_id') id: string,
    @Query('userId') userId: string,
  ){
    console.log("user",userId)
    return this.wishlistService.findOne(id, userId);
  }
  @Get('mywishlist/:id')
  findMyWishlist(@Param('id') userId:string){
    return this.wishlistService.findMyWishlist(userId)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(+id, updateWishlistDto);
  }

  @Delete(':_id')
  async remove(
    @Param('_id') id: string,
    @Body('userId') userId: string,
  ): Promise<any> {
    return this.wishlistService.remove(id, userId);
  }
}
