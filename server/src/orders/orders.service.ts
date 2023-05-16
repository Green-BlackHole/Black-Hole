import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly OrderModel: Model<Order>,
  ) {}
  async create(CreateOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.OrderModel(CreateOrderDto);
    console.log(CreateOrderDto);
    return createdOrder.save();
  }

  async findAll() {
    return await this.OrderModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
