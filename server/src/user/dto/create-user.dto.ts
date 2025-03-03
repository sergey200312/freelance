import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(2, { message: "Имя должно содержать хотя бы 2 символа" })
    firstName: string;

    @IsString()
    @MinLength(2, { message: "Фамилия должна содержать хотя бы 2 символа" })
    lastName: string;

    @IsEmail({}, { message: "Некорректный email-адрес" })
    email: string;

    @IsString()
    @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
    password: string

}
