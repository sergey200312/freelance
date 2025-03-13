import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Order, OrderSchema } from './entities/order.entity';
import { Category, CategorySchema } from 'src/category/entities/category.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Category.name, schema: CategorySchema }])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule { }
