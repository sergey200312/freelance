import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from 'src/order/entities/order.entity';
import { Model } from 'mongoose';
import { OrderStatus } from 'src/order/status.enum';
import { Review, ReviewDocument } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>
 ){}
  async create(currentUser: string, createReviewDto: CreateReviewDto, orderId: string) {
    const { text, rating } = createReviewDto
    const order = await this.orderModel.findOne({ _id: orderId }).exec()

    if (!order) {
      throw new BadRequestException('Заказ не найден')
    }

    if (order.status !== OrderStatus.COMPLETED) {
      return { message: 'Невозможно оставить отзыв, т.к. заказ еще не выполнен'}
    }

    if (order.client.toString() !== currentUser) {
      return { message: 'Вы не можете оставить отзыв на чужой заказ'}
    }

    const isExistReview = await this.reviewModel.findOne({ order: orderId, sender: currentUser }).exec()

    if (isExistReview) {
      return { message: 'Вы уже оставляли отзыв на данный заказ'}
    }

    const newReview = await this.reviewModel.create({
      recipient: order.freelancer,
      sender: currentUser, 
      order: order._id,
      text, 
      rating
    })

    return newReview
  }

  async findAll(userId: string) {
    const reviews = await this.reviewModel.find({ recipient: userId }).populate('order').exec()

    if (!reviews.length) {
      return { message: 'Отзывы не найдены'}
    }

    return reviews
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
