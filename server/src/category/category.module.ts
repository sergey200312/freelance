import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import mongoose from 'mongoose';
import { Category, CategorySchema } from './entities/category.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Category.name, schema: CategorySchema }
  ])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule { }
