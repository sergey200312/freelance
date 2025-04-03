import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type MessageDocument = Message & Document;

@Schema({ timestamps: true })
export class Message {


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    senderId: mongoose.Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    recipientId: mongoose.Types.ObjectId

    @Prop({ type: String, required: true})
    text: string
}

export const MessageSchema = SchemaFactory.createForClass(Message);