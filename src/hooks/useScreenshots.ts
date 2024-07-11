import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import { IScreenshot } from "../entities/IScreenshot";
import { IFetchResponse } from "../entities/IFetchResponse";


const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<IScreenshot>(`/games/${gameId}/screenshots`);

    return useQuery<IFetchResponse<IScreenshot>, Error>({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.get
    })
}

export default useScreenshots;