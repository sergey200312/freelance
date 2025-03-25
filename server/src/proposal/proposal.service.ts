import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from 'src/order/entities/order.entity';
import { Model } from 'mongoose';
import { Proposal, ProposalDocument } from './entities/proposal.entity';
import { OrderStatus } from 'src/order/status.enum';

@Injectable()
export class ProposalService {

  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Proposal.name) private proposalModel: Model<ProposalDocument>
  ) { }

  async create(createProposalDto: CreateProposalDto) {
    const { freelancer, order, comment, proposedPrice } = createProposalDto
    const orderData = await this.orderModel.findById(order)

    if (!orderData) return { message: 'Заказ не найден' }

    if (orderData.client.toString() === freelancer) {
      return { message: 'Вы не можете предложить выполнить свой же заказ' }
    }

    if (OrderStatus.COMPLETED === orderData.status) {
      return { message: 'Нельзя оставить предложение на выполнение, т.к. данный заказ уже выполнен' }
    }

    const isExistingProposal = await this.proposalModel.findOne({ order, freelancer })

    if (isExistingProposal) {
      return { message: 'Вы уже оставляли заявку на выполнение данного заказа' }
    }

    if (proposedPrice < 0) return { message: 'Предложенная цена не может быть меньше 0' }

    if (orderData.budget > 0 && proposedPrice > orderData.budget) {
      return { message: 'Предложенная цена не может быть больше бюджета заказа' };
    }

    const newProposal = await this.proposalModel.create({
      freelancer,
      order,
      comment,
      proposedPrice
    })

    return newProposal;
  }

  async findAll(userId: string, orderId: string) {
    const order = await this.orderModel.findOne({ _id: orderId, user: userId })

    if (!order) {
      return { message: 'Заказ не найден'}
    }

    const proposals = await this.proposalModel.find({ order: orderId })

    if (!proposals.length) {
      return { message: 'Список предложений пуст' }
    }

    return { proposals }
  }

  findOne(id: number) {
    return `This action returns a #${id} proposal`;
  }

  update(id: number, updateProposalDto: UpdateProposalDto) {
    return `This action updates a #${id} proposal`;
  }

  remove(id: number) {
    return `This action removes a #${id} proposal`;
  }
}
