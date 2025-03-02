import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { User } from "src/user/entities/user.entity";

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    recipient: User

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    sender: User

    @Prop({ type: String, required: true })
    text: string

    @Prop({ type: Number, required: true })
    rating: number

}

export const ReviewSchema = SchemaFactory.createForClass(Review);