import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor( @InjectModel(Category.name) private categoryModel: Model<CategoryDocument> ) {}
  async create(createCategoryDto: CreateCategoryDto) {

    const { name, parent } = createCategoryDto

    const isExist = await this.categoryModel.findOne({ name }).exec()

    if (isExist) {
      return { message: 'Категория с таким названием уже существует' }
    }

    if (parent) {
      const parentCategory = await this.categoryModel.findById(parent).exec()

      if (!parentCategory) {
        return { message: 'Категория не найдена'}
      }

      if (parentCategory.parent) {
        return { message: 'Категория уже имеет родительскую категорию'}
      }

    }

    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const newCategory = await this.categoryModel.create({
      name, 
      parent, 
      slug
    })

    return newCategory

  }

  async findAll() {
    const categories = await this.categoryModel.find().exec()

    if (!categories) {
      return { message: 'Категории не найдены'}
    }
    
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
