//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import rawPlatforms from "../data/platforms";
import axiosInstance, { IFetchResponse } from "../services/api";
export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

//=====Fetch using a generic hook=====
// const usePlatforms = () => {
//     const { data, error, isLoading } = useFetchData<IPlatform>('/platforms/lists/parents');
//     return { platforms: data, error, isLoading }
// }

//=====Fetch static data=====
//const usePlatforms = () => ({ platforms: rawPlatforms, error: null, isLoading: false })

//=====Fetch data using React Query=====
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => axiosInstance
        .get<IFetchResponse<IPlatform>>('/platforms/lists/parents')
        .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: rawPlatforms
})

export default usePlatforms;