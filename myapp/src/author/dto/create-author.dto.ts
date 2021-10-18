import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsInt, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString() 
    name: string;

    @IsString()
    origen: string;
}
 
