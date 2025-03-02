import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { OrderStatus } from "../status.enum";
import { UserClient } from "src/user_client/entities/user_client.entity";
import { UserFreelancer } from "src/user_freelancer/entities/user_freelancer.entity";
import { Category } from "src/category/entities/category.entity";
import { Proposal } from "src/proposal/entities/proposal.entity";

export type OrderDocument = Order & Document;

@Schema({ timestamps: true})
export class Order {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserClient', required: true })
    client: UserClient

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserFreelancer', default: ''})
    freelancer?: UserFreelancer

    @Prop({ type: String, required: true })
    title: string

    @Prop({ type: String, required: true })
    description: string

    @Prop({ type: Number })
    budget: number

    @Prop({ type: String })
    files?: string[]

    @Prop({ type: Date })
    deadline?: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true})
    category: Category

    @Prop({ enum: Object.values(OrderStatus), default: OrderStatus.OPEN })
    status: OrderStatus

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal', required: true })
    proposals?: Proposal[]

}

export const OrderSchema = SchemaFactory.createForClass(Order);


