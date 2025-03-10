import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {

    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    parent: mongoose.Types.ObjectId

    @Prop({ type: String, unique: true })
    slug?: string
}

export const CategorySchema = SchemaFactory.createForClass(Category);