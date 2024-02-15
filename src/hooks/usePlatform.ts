import useFetchData from "./useFetchData";

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const { data, error, isLoading } = useFetchData<IPlatform>('/platforms/lists/parents');
    return { platforms: data, error, isLoading }
}


export default usePlatforms;