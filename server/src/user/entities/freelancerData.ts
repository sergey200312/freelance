import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({ timestamps: true })
export class FreelancerData {

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders?: mongoose.Types.ObjectId[] 

  @Prop({ type: Number })
  experience?: number;

  @Prop({ type: String })
  bio?: string;
}

export const FreelancerDataSchema = SchemaFactory.createForClass(FreelancerData);