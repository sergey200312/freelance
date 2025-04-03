import { ChatService } from './chat.service';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Param, UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateChatDto } from './dto/create-chat.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IUser } from 'src/types/types';

@WebSocketGateway()
@UseGuards(JwtAuthGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    constructor(private readonly chatService: ChatService) { }

    @WebSocketServer()
    server: Server;

    async handleConnection(client: Socket) {
        console.log(`Пользователь подключился: ${client.id}`);
    }

    async handleDisconnect(client: Socket) {
        console.log(`Пользователь отключился: ${client.id}`);
    }

    @SubscribeMessage('sendMessage')
    async handleMessage(
        @CurrentUser() senderId: IUser,
        @MessageBody() createMessageDto: CreateChatDto,
        @ConnectedSocket() client: Socket
    ) {
        const { recipientId, text } = createMessageDto;
        const savedMessage = await this.chatService.saveMessage(senderId._id, recipientId, text);
        this.server.to(recipientId).emit('receiveMessage', savedMessage); 
    }

    @SubscribeMessage('getMessage')
    async getMessages(@CurrentUser() senderId: IUser, @MessageBody() recipientId: string,
        @ConnectedSocket() client: Socket) {
        const messages = await this.chatService.getMessages(senderId._id, recipientId);
        this.server.emit('receiveMessage', messages);
    }
}
