import { Module } from "@nestjs/common"
import { StoriesController } from "./story.controller";
import { StoriesService } from "./story.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StorySchema } from "./story.schema";
import { HttpModule } from "@nestjs/axios";

@Module({
    controllers: [StoriesController],
    providers: [StoriesService],
    imports: [HttpModule, MongooseModule.forFeature([{ name: 'Story', schema: StorySchema }])]
})

export class StoriesModule {
    constructor(private storiesService: StoriesService) { }
}