import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './entities/order.entity';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/entities/category.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) { }

  async create(userId: string, createOrderDto: CreateOrderDto) {

    const { title, description, budget, files, deadline, category } = createOrderDto

    const newOrder = await this.orderModel.create({
      client: userId,
      freelancer: null,
      title,
      description,
      budget,
      files,
      deadline,
      category,
    })

    return newOrder;
  }

  async findAll(filters: any) {
    const filtersQuery: any = {};

    if (filters.searchTerm) {
        filtersQuery['title'] = { $regex: filters.searchTerm, $options: 'i' };
    }

    if (filters.specializationName || filters.categoryName) {
        const categoryFilter: any = [];

        if (filters.specializationName) {
            categoryFilter.push({ name: { $regex: filters.specializationName, $options: 'i' } });
        }

        if (filters.categoryName) {
            categoryFilter.push({ parent: await this.categoryModel.findOne({ name: { $regex: filters.categoryName, $options: 'i' } }).then(cat => cat?._id) });
        }

        const categories = await this.categoryModel.find({ $or: categoryFilter }, '_id').exec();

        console.log(categoryFilter)
        if (categories.length > 0) {
            filtersQuery['category'] = { $in: categories.map(cat => cat._id) };
        }
    }



    const orders = await this.orderModel.find(filtersQuery)
        .sort({ createdAt: -1 })
        .populate('client', 'avatar_url username')
        .populate({
            path: 'category',
            select: 'name parent',
            populate: {
                path: 'parent',
                select: 'name',
            }
        })
        .exec();

    return orders.length > 0 ? orders : { message: 'Заказы не найдены' };
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
