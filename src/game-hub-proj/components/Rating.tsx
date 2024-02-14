import { Badge } from "@chakra-ui/react";

interface Props {
    rating: number;
}

const Rating = ({ rating }: Props) => {

    let color = rating > 4 ? 'green' : rating > 3 ? 'yellow' : 'red';

    return (
        <Badge
            fontSize='14px'
            paddingX={2}
            borderRadius='4px'
            colorScheme={color}
        >
            {rating}
        </Badge>
    );
}

export default Rating;