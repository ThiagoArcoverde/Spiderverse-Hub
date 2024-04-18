import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoryDocument = HydratedDocument<Story>;

@Schema()
export class Story {
  @Prop()
  title: string;

  @Prop()
  id: number;

  @Prop()
  digitalId: number;

  @Prop()
  issueNumber: number;

  @Prop()
  description: string;

  @Prop()
  pageCount: number;

  @Prop()
  thumbnail: string;
}

export const StorySchema = SchemaFactory.createForClass(Story);