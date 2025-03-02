import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../roles.enum";

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

    @Prop({ required: true, enum: Object.values(UserRole) })
    role: UserRole

    @Prop({ type: String })
    avatar_url?: string

}

export const UserSchema = SchemaFactory.createForClass(User);