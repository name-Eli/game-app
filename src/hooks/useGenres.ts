import useFetchData from "./useFetchData";

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    const { data, error, isLoading } = useFetchData<IGenre>('/genres');
    return { genres: data, error, isLoading }
}


export default useGenres;