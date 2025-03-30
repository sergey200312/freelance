import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, mongo } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    recipient: mongoose.Types.ObjectId

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    sender: mongoose.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true})
    order: mongoose.Types.ObjectId

    @Prop({ type: String, required: true })
    text: string

    @Prop({ type: Number, required: true })
    rating: number

}

export const ReviewSchema = SchemaFactory.createForClass(Review);