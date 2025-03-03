import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { Order } from "src/order/entities/order.entity";
import { ProposalStatus } from "../status.enum";
import { User } from "src/user/entities/user.entity";

export type ProposalDocument = Proposal & Document;

@Schema({ timestamps: true })
export class Proposal {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    freelancer: mongoose.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
    order: mongoose.Types.ObjectId

    @Prop({ type: String })
    comment?: string

    @Prop({ type: Number, required: true })
    proposedPrice: number

    @Prop({ enum: Object.values(ProposalStatus), default: ProposalStatus.PENDING})
    status: ProposalStatus
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);