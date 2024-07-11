import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";


interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const limitCharacters = 300;

    if (!children) return null;

    if (children.length <= limitCharacters) {
        return <Text>{children}</Text>
    }

    let textToShow = isExpanded ? children : `${children.substring(0, limitCharacters)}...`;

    return (
        <>
            {textToShow}
            <Button
                size='xs'
                fontWeight='bold'
                colorScheme='yellow'
                marginLeft={1}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </Button>
        </>
    )
}

export default ExpandableText;