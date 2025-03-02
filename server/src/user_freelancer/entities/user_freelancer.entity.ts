import { Availability } from './../availability.enum';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from 'src/category/entities/category.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from "src/user/entities/user.entity";

export type UserFreelancerDocument = UserFreelancer & Document;

@Schema({ timestamps: true})
export class UserFreelancer {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true })
    category: Category[]

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
    completedOrders?: Order[]

    @Prop({ type: Number, required: true })
    experience: number

    @Prop({ enum: Object.values(Availability), default: Availability.FREE })
    availability: Availability

    @Prop({ type: String })
    bio?: string

}

export const UserFreelancerSchema = SchemaFactory.createForClass(UserFreelancer);
