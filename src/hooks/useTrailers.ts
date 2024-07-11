import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import { ITrailer } from "../entities/ITrailer";
import { IFetchResponse } from "../entities/IFetchResponse";


const useTrailer = (gameId: number) => {
    const apiClient = new ApiClient<ITrailer>(`/games/${gameId}/movies`);

    return useQuery<IFetchResponse<ITrailer>, Error>({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.get
    })
}

export default useTrailer;