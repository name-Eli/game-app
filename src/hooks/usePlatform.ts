//import useFetchData from "./useFetchData";
import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";
import ApiClient, { IFetchResponse } from "../services/api";

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
const apiClient = new ApiClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<IFetchResponse<IPlatform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: staticPlatforms
})

export default usePlatforms;