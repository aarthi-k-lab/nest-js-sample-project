import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Name} from "./name.schema"
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ type: Name, required: true })
    name: Name;

    @Prop({required: true})
    email: string

    @Prop({required: true})
    age: number;
    
    @Prop()
    salary: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

