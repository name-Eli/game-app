import { Badge } from "@chakra-ui/react";

interface Props {
    rating: number;
}

export function ratingChecker(rating: number, options: [string, string, string]) {
    return rating > 4 ? options[0] : rating > 3 ? options[1] : options[2];
}

const Rating = ({ rating }: Props) => {
    return (
        <Badge
            fontSize='14px'
            paddingX={2}
            borderRadius='4px'
            colorScheme={ratingChecker(rating, ['green', 'yellow', 'red'])}
        >
            {rating}
        </Badge>
    );
}

export default Rating;