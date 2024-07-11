import { useQuery } from "@tanstack/react-query";
import staticGenres from "../data/genres";
import ApiClient from "../services/api";
import { IFetchResponse } from '../entities/IFetchResponse';
import { IGenre } from "../entities/IGenre";
import { hoursToMilliseconds } from "../utils/calculateTime";

const apiClient = new ApiClient<IGenre>('/genres');

const useGenres = () => useQuery<IFetchResponse<IGenre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: hoursToMilliseconds(24),
    initialData: staticGenres
})

export default useGenres;