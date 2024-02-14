import { useEffect, useState } from "react";
import api from '../services/api'
import { CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useFetchData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        setIsLoading(true);
        const controller = new AbortController();
        try {
            const promise = await api.get<FetchResponse<T>>(endpoint, { signal: controller.signal });
            setData(promise.data.results);
        }
        catch (err: any) {
            if (err instanceof CanceledError) return;
            setError(err.message);
        }
        finally {
            setIsLoading(false);
            controller.abort();
        }
    }

    return { data, error, isLoading };
}

export default useFetchData;