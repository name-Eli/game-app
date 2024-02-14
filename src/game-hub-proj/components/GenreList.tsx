import useGenres from "../hooks/useGenres";


const GenreList = () => {
    const { genres, error, isLoading } = useGenres();

    return (
        <>
            {
                genres?.map(genre => <p key={genre.id}>{genre.name}</p>)
            }
        </>
    );
}

export default GenreList;