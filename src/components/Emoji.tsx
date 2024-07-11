import { ratingChecker } from "./Rating";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    return (
        <span> {` ${ratingChecker(rating, ['🎯', '👍', '🩻'])}`} </span>
    )
}

export default Emoji;