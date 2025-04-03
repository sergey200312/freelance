import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/message/entities/message.entity';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  async saveMessage(senderId: string, recipientId: string, content: string) {
    const newMessage = new this.messageModel({ senderId, recipientId, content });
    return newMessage.save();
  }

  async getMessages(userId: string, recipientId: string) {
    return this.messageModel.find({
      $or: [
        { senderId: userId, recipientId },
        { senderId: recipientId, recipientId: userId },
      ],
    }).sort({ createdAt: 1 });
  }
}
