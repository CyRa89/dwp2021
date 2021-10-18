import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsInt, IsString } from "class-validator";

export class CreatePersonDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    email: string;

    @IsString()
    addres: string;

    @IsString()
    phone: string;
}

