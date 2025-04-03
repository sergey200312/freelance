import { IsMongoId, IsString, MaxLength, MinLength } from "class-validator";

export class CreateChatDto {
    @IsMongoId()
    recipientId: string

    @IsString()
    @MinLength(1, 
        { message: 'Сообщение должно содержать как минимум 1 символ' }
    )
    @MaxLength(1000, 
        { message: 'Сообщение должно содержать не более 1000 символов' }
    )
    text: string
}
