import { useQuery } from "@tanstack/react-query";
import staticPlatforms from "../data/platforms";
import ApiClient from "../services/api";
import { IFetchResponse } from '../entities/IFetchResponse';
import { IPlatform } from "../entities/IPlatform";
import { hoursToMilliseconds } from "../utils/calculateTime";

const apiClient = new ApiClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<IFetchResponse<IPlatform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: hoursToMilliseconds(24),
    initialData: staticPlatforms
})

export default usePlatforms;