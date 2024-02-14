import useFetchData from "./useFetchData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    const { data, error, isLoading } = useFetchData<Genre>('/genres');
    return { genres: data, error, isLoading }
}


export default useGenres;