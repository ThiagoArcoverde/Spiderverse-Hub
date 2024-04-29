import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { StoriesService } from 'src/story/story.service';
import { Author } from './author.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
    constructor(private configService: ConfigService,
        private readonly httpService: HttpService,
        private readonly storiesService: StoriesService,
        @InjectModel(Author.name) private authorModel: Model<Author>
    ) { }

    async getAuthors() {
        var authors = await this.authorModel.find().exec();
        if (authors.length === 0) {
            await this.fetchAuthors()
            return await this.authorModel.find().exec();
        }
        return authors
    }

    async fetchAuthors() {
        var stories = await this.storiesService.findAll()
        if (stories.length == 0) {
            await this.storiesService.fetchStories()
            stories = await this.storiesService.findAll()
        }
        const ts = this.configService.get('ts')
        const apiKey = this.configService.get('public_key')
        const hash = this.configService.get('hash')

        stories.map(async (story) => {
            var authors = await this.httpService.get(`https://gateway.marvel.com:443/v1/public/comics/${story.id}/creators?ts=${ts}&apikey=${apiKey}&hash=${hash}`).toPromise()
            await authors.data.data.results.map(async (author) => {
                var exist = await this.authorModel.findOne({ id: author.id }).exec()
                if (!exist) {
                    var newAuthor = new this.authorModel({
                        id: author.id,
                        name: author.fullName,
                        comics: author.comics.available,
                        thumbnail: `${author.thumbnail.path}.${author.thumbnail.extension}`
                    })
                    await newAuthor.save()
                }
            })
        })
    }
}
