import { IsInt, IsString, Length } from "class-validator";

export class Peticion{
    @IsInt()
    id : number;

    @IsString()
    @Length(8,20)
    usr : string;
}