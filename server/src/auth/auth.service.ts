import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import * as argon2 from 'argon2'
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/entities/user.entity";
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Неправильный пароль или почта');
    }

    const passwordIsMatch = await argon2.verify(user.password, password);
    if (!passwordIsMatch) {
      throw new UnauthorizedException('Неправильный пароль или почта');
    }

    return user;
  }

  async login(user: UserDocument) {
    const { _id, email, firstName, lastName } = user;
    return {
      _id,
      email,
      firstName,
      lastName,
      token: this.jwtService.sign({ _id: _id, email }),
    };
  }
}