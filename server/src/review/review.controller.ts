import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { IUser } from 'src/types/types';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(':orderId')
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@CurrentUser() currentUser: IUser, @Body() createReviewDto: CreateReviewDto, 
  @Param('orderId') orderId: string) {
    return this.reviewService.create(currentUser._id, createReviewDto, orderId);
  }

  @Get(':userId')
  @UseGuards(JwtAuthGuard)
  findAll(@Param('userId') userId: string) {
    return this.reviewService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(+id);
  }
}
