import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import IGame from "../entities/IGame";


const apiClient = new ApiClient<IGame>('/games');

const useGame = (slug: string) => useQuery<IGame>({
    queryKey: ['games', slug],
    queryFn: () => apiClient.getById(slug)
})

export default useGame;