//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import { IGameQueryBy } from "../components/App";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatform";
import axiosInstance, { IFetchResponse } from "../services/api";


export interface IGame {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: IPlatform }[]
    genres: IGenre[];
    rating: number;
}

//=====Fetch using a generic hook=====
// const useGames = (gameQueryBy: IGameQueryBy) => {
//     const { data, error, isLoading } = useFetchData<IGame>(
//         '/games',
//         {
//             params: {
//                 genres: gameQueryBy.genre?.id,
//                 parent_platforms: gameQueryBy.platform?.id,
//                 ordering: gameQueryBy.sortOrder,
//                 search: gameQueryBy.searchText
//             }
//         },
//         [gameQueryBy] //Whenever this prop changes, it triggers a new call to the backend
//     );
//     return { games: data, error, isLoading }
// }

//=====Fetch data using React Query=====
const useGames = (gameQueryBy: IGameQueryBy) => useQuery({
    queryKey: ['games', gameQueryBy],
    queryFn: () => axiosInstance
        .get<IFetchResponse<IGame>>('/games', {
            params: {
                genres: gameQueryBy.genre?.id,
                parent_platforms: gameQueryBy.platform?.id,
                ordering: gameQueryBy.sortOrder,
                search: gameQueryBy.searchText
            }
        })
        .then(res => res.data.results)
})

export default useGames;