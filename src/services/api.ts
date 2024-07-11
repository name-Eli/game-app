import axios, { AxiosRequestConfig } from 'axios';
import { IFetchResponse } from '../entities/IFetchResponse';


export const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'c599398a2bc44a8b8064a8f783b60618'
    }
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = (params: AxiosRequestConfig = {}) => {
        return axiosInstance
            .get<IFetchResponse<T>>(this.endpoint, params)
            .then(res => res.data);
    }

    getById = (id: number | string) => {
        return axiosInstance
            .get<T>(`${this.endpoint}/${id}`)
            .then(res => res.data);
    }
}

export default ApiClient;