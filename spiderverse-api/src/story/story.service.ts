import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Story, StoryDocument } from "./story.schema";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class StoriesService {
    constructor(private readonly httpService: HttpService,
        private configService: ConfigService,
        @InjectModel(Story.name) private storyModel: Model<StoryDocument>) { }

    async findAll(): Promise<Story[]> {
        var stories = await this.storyModel.find().exec();
        stories.sort((a, b) => a.id - b.id);
        return stories;
    }

    async fetchStories() {
        const publicKey = this.configService.get('public_key')
        const ts = this.configService.get('ts')
        const hash = this.configService.get('hash')
        const url = `https://gateway.marvel.com/v1/public/comics?title=spider-verse&ts=${ts}&apikey=${publicKey}&hash=${hash}`

        const response = await this.httpService.get(url).toPromise();
        const data = response.data.data.results;
        console.log(data)
        data.forEach(async (element) => {
            const story = new this.storyModel({
                title: element.title,
                id: element.id,
                digitalId: element.digitalId,
                issueNumber: element.issueNumber,
                description: element.description,
                pageCount: element.pageCount,
                thumbnail: element.thumbnail.path + '.' + element.thumbnail.extension
            });
            await story.save();
        });
    }

    async deleteAll() {
        await this.storyModel.deleteMany({}).exec();
    }

}