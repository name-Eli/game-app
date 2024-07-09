import { useQuery } from "@tanstack/react-query";
import staticGenres from "../data/genres";
import ApiClient, { IFetchResponse } from "../services/api";
import { hoursToMilliseconds } from "../utils/calculateTime";

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<IGenre>('/genres');

const useGenres = () => useQuery<IFetchResponse<IGenre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: hoursToMilliseconds(24),
    initialData: staticGenres
})

export default useGenres;