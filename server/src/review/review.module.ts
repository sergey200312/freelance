import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Order, OrderSchema } from 'src/order/entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './entities/review.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Review.name, schema: ReviewSchema }
  ])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
