import { PartialType } from '@nestjs/mapped-types';
import { CreateUserFreelancerDto } from './create-user_freelancer.dto';

export class UpdateUserFreelancerDto extends PartialType(CreateUserFreelancerDto) {}
