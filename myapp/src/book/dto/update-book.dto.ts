import { OmitType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsArray, IsDate, IsInt, IsString } from "class-validator";

export class UpdateBookDto extends OmitType(CreateBookDto, ["isbn", "edition"] as const) {
    
}
