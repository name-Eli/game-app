//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import staticGenres from "../data/genres";
import ApiClient, { IFetchResponse } from "../services/api";
import { hoursToMilliseconds } from "../utils/calculateTime";

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

//=====Fetch using a generic hook=====
// const useGenres = () => {
//     const { data, error, isLoading } = useFetchData<IGenre>('/genres');
//     return { genres: data, error, isLoading }
// }

//=====Fetch static data=====
//const useGenres = () => ({ genres: rawGenres, error: null, isLoading: false })

//=====Fetch data using React Query=====
const apiClient = new ApiClient<IGenre>('/genres');

const useGenres = () => useQuery<IFetchResponse<IGenre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: hoursToMilliseconds(24),
    initialData: staticGenres
})

export default useGenres;