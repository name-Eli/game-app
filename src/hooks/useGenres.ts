//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import rawGenres from "../data/genres";
import ApiClient, { IFetchResponse } from "../services/api";

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
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: rawGenres.length, results: rawGenres, next: null }
})

export default useGenres;