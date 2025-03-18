import { Type } from "class-transformer";
import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProposalDto {
    @IsMongoId()
    freelancer: string

    @IsMongoId()
    order: string

    @IsOptional()
    @IsString()
    comment?: string

    @IsNumber()
    @Type(() => Number)
    proposedPrice: number
}
