import { Injectable } from '@nestjs/common';

@Injectable()
export class MidiaService {

    getAll() {
        //spider-verse midia/movies
        return [{
            id: 1,
            title: "Spider-Man: Into the Spider-Verse",
            description: `Spider-Man: Into the Spider-Verse (2018) is an adaptation of "Spider-Verse", along with some elements
                of "The Death of Spider-Man" and "Spider-Men" storylines, which focuses on alternate universe versions of Spider-Man
                coming together to save their various realities from being destroyed by the Kingpin's Super-Collider. The central
                Spider character is Miles Morales, who is joined by an older, disheveled version Spider-Man named Peter B. Parker,
                Gwen Stacy / Spider-Woman, Spider-Man Noir, Peni Parker / SP//dr, and Spider-Ham.`,
            thumbnail: "Into-the-spider-verse.png"
        },
        {
            id: 2,
            title: "Spider-Man: Across the Spider-Verse",
            description: `On Earth-65, police captain George Stacy is unaware that his daughter Gwen Stacy is Spider-Woman, whom the
                police believe to be a murderer. One night, Gwen encounters a version of the Vulture from an Italian Renaissance-themed
                alternate universe. Miguel O'Hara and Jess Drew arrive using portal-generating watches and help Gwen neutralize the Vulture.
                George corners Gwen, who then reveals her identity to him; distraught, he attempts to arrest her. Miguel reluctantly grants
                Gwen membership into the Spider-Society, allowing her to escape with him and Jess.`,
            thumbnail: "Across-the-spider-verse.png"
        }]
    }
}
