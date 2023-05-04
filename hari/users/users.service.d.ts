import * as mongoose from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: mongoose.Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    remove(id: string): Promise<mongoose.Document<unknown, {}, User> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
}
