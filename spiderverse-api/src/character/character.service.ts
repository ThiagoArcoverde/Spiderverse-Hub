import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { StoriesService } from 'src/story/story.service';
import { Character } from './character.schema';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
    constructor(private configService: ConfigService,
        private readonly httpService: HttpService,
        private readonly storiesService: StoriesService,
        @InjectModel(Character.name) private characterModel: Model<Character>
    ) { }

    async findAll(): Promise<Character[]> {
        var characters = await this.characterModel.find().exec();
        if (characters.length == 0) {
            await this.fetchCharacters()
            characters = await this.characterModel.find().exec();
        }
        return characters;
    }

    async fetchCharacters() {
        var stories = await this.storiesService.findAll()
        if (stories.length == 0) {
            await this.storiesService.fetchStories()
        }

        var char1 = new this.characterModel({
            id: 1,
            name: "Miles Morales",
            description: "Miles Morales is a superhero and the second predominant Spider-Man to appear in American comic books" +
                "published by Marvel Comics, created in 2011 by writer Brian Michael Bendis and artist Sara Pichelli, along with input" +
                "by Marvel's then-editor-in-chief Axel Alonso.Originally from the alternate Ultimate Marvel Universe Earth-1610 before" +
                "being retconned to the main Marvel Universe Earth-616, he was bitten by a model spider that was specially and genetically" +
                "engineered by Oscorp Industries biochemist, Dr. Conrad Marcus, who used the Oz Formula at the behest of Norman Osborn" +
                "to create 'enhanced spiders' in an attempt to duplicate the abilities of the original Spider-Man of the Earth-1610" +
                "Ultimate Universe.",
            thumbnail: "Miles-morales.png"
        })
        var char2 = new this.characterModel({
            id: 2,
            name: "Spider-Woman",
            description: "An alternate-universe version of Gwen Stacy from Spider-Man stories, she lives on Earth-65, where as a teenager" +
                "she was bitten by a radioactive spider and becomes Spider-Woman, developing some of the classic Spider-Man personality," +
                "conflicts, tribulations, powers and abilities. The character's enemies include Earth-65 versions of Matt Murdock," +
                "Frank Castle, and Susan Storm.",
            thumbnail: "Spider-woman.png"
        })
        var char3 = new this.characterModel({
            id: 3,
            name: "Spider-Punk",
            description: "During the Spider-Verse storyline, the Earth-138 version of Spider-Man is revealed to be Hobart Brown," +
                "originally operating as Spider-Punk. He is a homeless teenager who was transformed by a spider that was irradiated as" +
                "part of President Norman Osborn's toxic waste dumping. He becomes the punk rock inspired Spider-Man, leading the" +
                "downtrodden people of New York against Osborn's V.E.N.O.M. troops. Spider-Punk managed to kill Osborn during a riot" +
                "by bashing the President with his guitar.",
            thumbnail: "Spider-punk.png"
        })
        var char4 = new this.characterModel({
            id: 4,
            name: "Peni Parker",
            description: "Peni Parker is a superhero appearing in American comic books published by Marvel Comics. Created by" +
                "writer and musician Gerard Way and artist Jake Wyatt, she is an alternative version of Spider-Man from an Evangelion-inspired" +
                "universe. Piloting a psychically-powered mech suit originally piloted by her father Peter known as the SP//dr, partially" +
                "controlled by a radioactive spider (named SP//dr) that also shares a psychic link with her, the teenage Peni" +
                "has been fighting daily since she was nine years old.",
            thumbnail: "Peni-parker.png"
        })
        var char5 = new this.characterModel({
            id: 5,
            name: "Spider-Ham",
            description: "Spider-Ham (Peter Porker) is a superhero appearing in American comic books published by Marvel Comics." +
                "The character is an anthropomorphic pig and is a cartoon animal parody version of Spider-Man. He was created by Larry Hama," +
                "Tom DeFalco, and Mark Armstrong. The character existed on Earth-8311, which was a universe populated by" +
                "anthropomorphic parody versions of the Marvel superheroes and supervillains. Spider-Ham made his feature film" +
                "debut in Spider-Man: Into the Spider-Verse (2018), voiced by John Mulaney.",
            thumbnail: "Spider-ham.png"
        })

        await Promise.all([
            char1.save(),
            char2.save(),
            char3.save(),
            char4.save(),
            char5.save()
        ])
        
    }

}
