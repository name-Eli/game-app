import useFetchData from "./useFetchData";

interface Genre {
    id: number;
    name: string;

}

const useGenres = () => {
    const { data, error, isLoading } = useFetchData<Genre>('/genre');
    return { genres: data, error, isLoading }
}


export default useGenres;