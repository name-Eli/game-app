import { IGameQueryBy } from "../components/App";
import useFetchData from "./useFetchData";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatform";


export interface IGame {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: IPlatform }[]
    rating: number;
    genres: IGenre[];
}


const useGames = (gameQueryBy: IGameQueryBy) => {
    const { data, error, isLoading } = useFetchData<IGame>(
        '/games',
        {
            params: {
                genres: gameQueryBy.genre?.id,
                platforms: gameQueryBy.platform?.id,
                ordering: gameQueryBy.sortOrder,
                search: gameQueryBy.searchText
            }
        },
        [gameQueryBy]
    );
    return { games: data, error, isLoading }
}

export default useGames;