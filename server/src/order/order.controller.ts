import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IUser } from 'src/types/types';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@CurrentUser() user: IUser, @Body() createOrderDto: CreateOrderDto) {
    console.log(user._id)
    return this.orderService.create(user._id, createOrderDto);
  }

  @Get()
  findAll(@Query() filters: any) {
    return this.orderService.findAll(filters);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  findMyOrders(@CurrentUser() user: IUser) {
    return this.orderService.findMyOrders(user._id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
