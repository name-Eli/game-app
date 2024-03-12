import { useEffect, useState } from "react";
import api from '../services/api';
import { AxiosRequestConfig, CanceledError } from "axios";

interface IFetchResponse<T> {
    results: T[];
}

const useFetchData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, effectDependencies: any[] = []) => {
    const [data, setData] = useState<T[] | undefined>();
    const [error, setError] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await api.get<IFetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig
                });
                setData(response.data.results);
            }
            catch (err: any) {
                if (err instanceof CanceledError) return;
                setError(err.message);
            }
            finally {
                setIsLoading(false);
                controller.abort();
            }
        };

        fetchData();

        return () => controller.abort();
    }, effectDependencies);

    return { data, error, isLoading };
};

export default useFetchData;