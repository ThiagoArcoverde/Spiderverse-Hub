import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    thumbnail: string;

    @Prop()
    comics: number;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);