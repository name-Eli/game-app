import { useEffect, useState } from "react";
import api from '../services/api'
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useFetchData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, effectDependencies?: any[]) => {
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, effectDependencies ? [...effectDependencies] : []);

    async function getData() {
        setIsLoading(true);
        const controller = new AbortController();
        try {
            const promise = await api.get<FetchResponse<T>>(endpoint, {
                signal: controller.signal,
                ...requestConfig
            });
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