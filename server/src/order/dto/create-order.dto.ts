import { Transform, Type } from "class-transformer";
import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateOrderDto {

    @IsString()
    @MinLength(5, { message: 'Заголовок должен содержать минимум 5 символов'})
    @MaxLength(300, { message: 'Заголовок должен содержать меньше 1000 символов'})
    title: string

    @IsString()
    @MinLength(10, { message: 'Описание должен содержать минимум 10 символов'})
    @MaxLength(2000, { message: 'Описание должен содержать меньше 2000 символов'})
    description: string

    @IsNumber()
    @Type(() => Number)
    budget: number

    @IsOptional()
    @IsString({ each: true })
    files?: string[]

    @IsOptional()
    @IsDate()
    @Transform(({ value }) => new Date(value))
    deadline?: Date

    
    category: string

}
