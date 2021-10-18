import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsInt, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    name : string; //editable
    
    @IsDate()
    @Type(() => Date)
    publish_date : Date;
    
    @IsString()
    category : string;
   
    @IsString()
    publisher : string;
    
    @IsInt()
    sell_price : number;
    
    @IsString()
    isbn : string;
    
    @IsInt()
    stock : number;
    
    @IsString()
    edition : string;
}
