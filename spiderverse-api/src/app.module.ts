import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './story/story.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
import { AuthorModule } from './author/author.module';
import { MidiaModule } from './midia/midia.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/spiderverse'),
    StoriesModule,
    CharacterModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthorModule,
    MidiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
