//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import rawGenres from "../data/genres";
import axiosInstance, { IFetchResponse } from "../services/api";

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
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => axiosInstance
        .get<IFetchResponse<IGenre>>('/genres')
        .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: rawGenres
})

export default useGenres;