import {Name} from "../schemas/name.schema"
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    readonly name: Name;
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly age: string;
    readonly salary: Date;
  }