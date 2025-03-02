import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";

export type UserClientDocument = UserClient & Document;

@Schema({ timestamps: true })
export class UserClient {

    @Prop({ type: String, unique: true })
    companyName?: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
    orders: Order[]

}

export const UserClientSchema = SchemaFactory.createForClass(UserClient);