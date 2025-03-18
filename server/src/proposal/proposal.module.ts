import { Module } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { ProposalController } from './proposal.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/order/entities/order.entity';
import { Proposal, ProposalSchema } from './entities/proposal.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Proposal.name, schema: ProposalSchema }
  ])],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule { }
