import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserClientService } from './user_client.service';
import { CreateUserClientDto } from './dto/create-user_client.dto';
import { UpdateUserClientDto } from './dto/update-user_client.dto';

@Controller('user-client')
export class UserClientController {
  constructor(private readonly userClientService: UserClientService) {}

  @Post()
  create(@Body() createUserClientDto: CreateUserClientDto) {
    return this.userClientService.create(createUserClientDto);
  }

  @Get()
  findAll() {
    return this.userClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserClientDto: UpdateUserClientDto) {
    return this.userClientService.update(+id, updateUserClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userClientService.remove(+id);
  }
}
