import { Name } from "../schemas/name.schema";
export declare class CreateUserDto {
    readonly name: Name;
    readonly email: string;
    readonly age: string;
    readonly salary: Date;
}
