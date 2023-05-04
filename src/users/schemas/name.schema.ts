import { Document } from 'mongoose';
import { Prop } from '@nestjs/mongoose';


export class Name extends Document {
  @Prop({ default: " " })
  firstName: string;

  @Prop({ default: " " })
  lastName: string;
}