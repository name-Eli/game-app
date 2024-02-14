import { useEffect, useState } from "react";
import api from "../services/api";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;

}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);

        api.get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => setGenres(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })
            .finally(() =>
                setIsLoading(false)
            );

        return () => controller.abort(); //the function we return inside the useEffect is the clean-up function that will run when the component removed from screen
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;