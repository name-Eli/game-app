import { useEffect, useState } from "react";
import api from '../services/api'
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
    rating: number;

}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        api.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort(); //the function we return inside the useEffect is the clean-up function that will run when the component removed from screen
    }, []);

    return { games, error };
}

export default useGames;