import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFreelancerService } from './user_freelancer.service';
import { CreateUserFreelancerDto } from './dto/create-user_freelancer.dto';
import { UpdateUserFreelancerDto } from './dto/update-user_freelancer.dto';

@Controller('user-freelancer')
export class UserFreelancerController {
  constructor(private readonly userFreelancerService: UserFreelancerService) {}

  @Post()
  create(@Body() createUserFreelancerDto: CreateUserFreelancerDto) {
    return this.userFreelancerService.create(createUserFreelancerDto);
  }

  @Get()
  findAll() {
    return this.userFreelancerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFreelancerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserFreelancerDto: UpdateUserFreelancerDto) {
    return this.userFreelancerService.update(+id, updateUserFreelancerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFreelancerService.remove(+id);
  }
}
