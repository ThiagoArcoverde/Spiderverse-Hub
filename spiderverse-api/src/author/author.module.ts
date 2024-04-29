import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { HttpModule } from '@nestjs/axios';
import { StoriesModule } from 'src/story/story.module';
import { AuthorSchema } from './author.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
  imports: [HttpModule, ConfigModule, StoriesModule, MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]) ]
})
export class AuthorModule {}
