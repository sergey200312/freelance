import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IUser } from 'src/types/types';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('proposal')
export class ProposalController {

  constructor(private readonly proposalService: ProposalService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  create(@CurrentUser() user: IUser, @Body() createProposalDto: CreateProposalDto, @Param('id') orderId: string) {
    return this.proposalService.create(user._id, createProposalDto, orderId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser() currentUser: IUser, @Param('id') order: string) {
    return this.proposalService.findAll(currentUser._id, order);
  }

  // @Get(':id')
  // findOne(@CurrentUser() currentUser: IUser, @Param('id') orderId: string) {
  //   return this.proposalService.findOne(currentUser._id, orderId);
  // }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProposalDto: UpdateProposalDto) {
    return this.proposalService.update(+id, updateProposalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalService.remove(+id);
  }
}
