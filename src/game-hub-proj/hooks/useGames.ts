import useFetchData from "./useFetchData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    rating: number;
    genres: Genre[];
}


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    const { data, error, isLoading } = useFetchData<Game>(
        '/games',
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id
            }
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );
    return { games: data, error, isLoading }
}

export default useGames;