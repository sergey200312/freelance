import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IUser } from 'src/types/types';

@Controller('proposal')
export class ProposalController {

  constructor(private readonly proposalService: ProposalService) {}

  @Post()
  create(@Body() createProposalDto: CreateProposalDto) {
    return this.proposalService.create(createProposalDto);
  }

  @Get()
  findAll(@CurrentUser() currentUser: IUser) {
    return this.proposalService.findAll(currentUser._id);
  }

  @Get(':id')
  findOne(@CurrentUser() currentUser: IUser, @Param('id') orderId: string) {
    return this.proposalService.findOne(currentUser._id, orderId);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProposalDto: UpdateProposalDto) {
    return this.proposalService.update(+id, updateProposalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalService.remove(+id);
  }
}
