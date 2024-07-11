import IGenre from "./IGenre";
import IPlatform from "./IPlatform";
import IPublisher from "./IPublisher";


interface IGame {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    publishers: IPublisher[];
    background_image: string;
    parent_platforms: { platform: IPlatform; }[];
    genres: IGenre[];
    rating: number;
}

export default IGame;
