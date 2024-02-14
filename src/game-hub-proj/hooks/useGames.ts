import useFetchData from "./useFetchData";

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
}


const useGames = () => {
    const { data, error, isLoading } = useFetchData<Game>('/games');
    return { games: data, error, isLoading }
}

export default useGames;