import { Module } from '@nestjs/common';
import { UserFreelancerService } from './user_freelancer.service';
import { UserFreelancerController } from './user_freelancer.controller';

@Module({
  controllers: [UserFreelancerController],
  providers: [UserFreelancerService],
})
export class UserFreelancerModule {}
