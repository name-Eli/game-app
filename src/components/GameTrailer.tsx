import useTrailer from "../hooks/useTrailers";


interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailer(gameId);

    if (isLoading) return null;
    if (error) throw error;

    const trailerDomain = data?.results[0];

    return trailerDomain ? (
        <video
            src={trailerDomain?.data.max}
            poster={trailerDomain?.preview}
            controls
        />
    ) : null

}

export default GameTrailer;