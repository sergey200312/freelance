import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './entities/order.entity';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>
  ) {}

  async create(userId: string, createOrderDto: CreateOrderDto) {

    const newOrder = await this.orderModel.create({
      client: userId,
      freelancer: null,
      title: createOrderDto.title,
      description: createOrderDto.description,
      budget: createOrderDto.budget,
      files: createOrderDto.files,
      deadline: createOrderDto.deadline,
      category: createOrderDto.category
    })

    return newOrder;
  }

  async findAll() {
    const order = await this.orderModel.find().populate('category').exec()

    if (!order) {
      return { message: 'Заказы не найдены'}
    }

    return order
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
