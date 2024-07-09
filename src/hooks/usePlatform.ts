import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";
import ApiClient, { IFetchResponse } from "../services/api";
import { hoursToMilliseconds } from "../utils/calculateTime";

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<IFetchResponse<IPlatform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: hoursToMilliseconds(24),
    initialData: staticPlatforms
})

export default usePlatforms;