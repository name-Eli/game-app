//import useFetchData from "./useFetchData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IGameQueryBy } from "../components/App";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatform";
import ApiClient, { IFetchResponse } from "../services/api";


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
const apiClient = new ApiClient<IGame>('/games');

const useGames = (gameQueryBy: IGameQueryBy) => useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ['games', gameQueryBy],
    queryFn: ({ pageParam }) => apiClient.get({
        params: {
            genres: gameQueryBy.genre?.id,
            parent_platforms: gameQueryBy.platform?.id,
            ordering: gameQueryBy.sortOrder,
            search: gameQueryBy.searchText,
            pageParam: pageParam
        }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
})

export default useGames;