import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Order } from "src/order/entities/order.entity";
import { UserFreelancer } from "src/user_freelancer/entities/user_freelancer.entity";
import { ProposalStatus } from "../status.enum";

export type ProposalDocument = Proposal & Document;

@Schema({ timestamps: true })
export class Proposal {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserFreelancer', required: true })
    freelancer: UserFreelancer

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
    order: Order

    @Prop({ type: String })
    comment?: string

    @Prop({ type: Number, required: true })
    proposedPrice: number

    @Prop({ enum: Object.values(ProposalStatus), default: ProposalStatus.PENDING})
    status: ProposalStatus
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);