import { Injectable } from '@nestjs/common';
import { CreateUserFreelancerDto } from './dto/create-user_freelancer.dto';
import { UpdateUserFreelancerDto } from './dto/update-user_freelancer.dto';

@Injectable()
export class UserFreelancerService {
  create(createUserFreelancerDto: CreateUserFreelancerDto) {
    return 'This action adds a new userFreelancer';
  }

  findAll() {
    return `This action returns all userFreelancer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFreelancer`;
  }

  update(id: number, updateUserFreelancerDto: UpdateUserFreelancerDto) {
    return `This action updates a #${id} userFreelancer`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFreelancer`;
  }
}
