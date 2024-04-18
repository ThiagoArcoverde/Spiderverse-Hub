import { Controller, Delete, Get } from "@nestjs/common";
import { StoriesService } from "./story.service";


@Controller('stories')
export class StoriesController {
    constructor(private readonly storiesService: StoriesService) { }

    @Get()
    async findAll() {
        var stories = await this.storiesService.findAll()
        if (stories.length == 0) {
            await this.storiesService.fetchStories()
            stories = await this.storiesService.findAll()
        }
        return stories
    }

}