import useFetchData from "./useFetchData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    rating: number;
    genres: Genre[];
}


const useGames = (selectedGenre: Genre | null) => {
    const { data, error, isLoading } = useFetchData<Game>(
        '/games',
        { params: { genres: selectedGenre?.id } },
        [selectedGenre?.id]
    );
    return { games: data, error, isLoading }
}

export default useGames;