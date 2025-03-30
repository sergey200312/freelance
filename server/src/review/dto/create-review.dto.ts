import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @IsString()
    text: string

    @IsNumber()
    @Type(() => Number)
    rating: number
}
