import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../roles.enum";
import mongoose, { Document } from 'mongoose';
import { FreelancerData } from "./freelancerData";


export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

    @Prop({ type: String, unique: true, required: true })
    email: string

    @Prop({ type: String, required: true })
    password: string

    @Prop({ type: String, required: true })
    firstName: string

    @Prop({ type: String, required: true })
    lastName: string

    @Prop({ enum: Object.values(UserRole), default: UserRole.USER })
    role: UserRole

    @Prop({ type: String })
    avatar_url?: string

    @Prop({ type: FreelancerData })
    freelancerData?: FreelancerData;
    
}

export const UserSchema = SchemaFactory.createForClass(User);