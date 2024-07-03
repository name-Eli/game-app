//import useFetchData from "./useFetchData";
import rawGenres from "../data/genres";

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => {
//     const { data, error, isLoading } = useFetchData<IGenre>('/genres');
//     return { genres: data, error, isLoading }
// }

const useGenres = () => ({ genres: rawGenres, error: null, isLoading: false })


export default useGenres;