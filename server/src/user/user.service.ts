import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { generateAvatar } from 'src/avatar/avatar.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  
  async register(createUserDto: CreateUserDto) {

    const { email, username, password } = createUserDto

    const existUser = await this.userModel.findOne({ email });

    const existUserName = await this.userModel.findOne({ username })

    if (existUser) {
      throw new BadRequestException('Пользователь с таким email уже существует');
    }

    if (existUserName) {
      throw new BadRequestException('Пользователь с таким никнеймом уже существует')
    }

    const user = new this.userModel({
      username,
      email,
      password: await argon2.hash(password),
      avatar_url: generateAvatar(email)
    });

    return user.save();
  
  }

}
