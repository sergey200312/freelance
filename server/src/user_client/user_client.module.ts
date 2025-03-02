import { Module } from '@nestjs/common';
import { UserClientService } from './user_client.service';
import { UserClientController } from './user_client.controller';

@Module({
  controllers: [UserClientController],
  providers: [UserClientService],
})
export class UserClientModule {}
