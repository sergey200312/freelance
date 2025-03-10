import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(2, { message: "Никнейм должен содержать хотя бы 2 символа" })
    username: string

    @IsEmail({}, { message: "Некорректный email-адрес" })
    email: string;

    @IsString()
    @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
    password: string

}
