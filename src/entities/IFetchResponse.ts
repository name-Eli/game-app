
interface IFetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

export default IFetchResponse;
