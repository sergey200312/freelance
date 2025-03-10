import { IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    name: string

    @IsOptional()
    @IsMongoId()
    parent?: string
    
}
