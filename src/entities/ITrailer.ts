
interface IMovieResolution {
    480: string;
    max: string;
}

interface ITrailer {
    id: number;
    name: string;
    preview: string;
    data: IMovieResolution;
}

export default ITrailer;
