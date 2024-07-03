//import useFetchData from "./useFetchData";
import rawPlatforms from "../data/platforms";
export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => {
//     const { data, error, isLoading } = useFetchData<IPlatform>('/platforms/lists/parents');
//     return { platforms: data, error, isLoading }
// }

const usePlatforms = () => ({ platforms: rawPlatforms, error: null, isLoading: false })


export default usePlatforms;