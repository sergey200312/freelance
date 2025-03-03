import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2'

@Injectable()
export class UserService {
  userModel: any;
  async register(createUserDto: CreateUserDto) {
    
    const existUser = await this.userModel.findOne({ email: createUserDto.email });

    if (existUser) {
      throw new BadRequestException('Пользователь с таким email уже существует');
    }

    const user = new this.userModel({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
    });

    return user.save();
  
  }

}
