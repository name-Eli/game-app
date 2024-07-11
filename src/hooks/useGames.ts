import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import IFetchResponse from '../entities/IFetchResponse';
import IGame from "../entities/IGame";
import { hoursToMilliseconds } from "../utils/calculateTime";
import useGameQueryState from "../states/gameQueryState";


const apiClient = new ApiClient<IGame>('/games');

const useGames = () => {
    const gameQueryBy = useGameQueryState(state => state.gameQueryBy);

    return useInfiniteQuery<IFetchResponse<IGame>, Error>({
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
        staleTime: hoursToMilliseconds(24),
    })
}

export default useGames;