import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { HttpModule } from '@nestjs/axios';
import { StoriesModule } from 'src/story/story.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSchema } from './character.schema';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
   imports: [HttpModule, StoriesModule, MongooseModule.forFeature([{ name: 'Character', schema: CharacterSchema }])],
})
export class CharacterModule {}
