import useFetchData from "./useFetchData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const { data, error, isLoading } = useFetchData<Platform>('/platforms/lists/parents');
    return { platforms: data, error, isLoading }
}


export default usePlatforms;