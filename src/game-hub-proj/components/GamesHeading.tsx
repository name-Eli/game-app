import { Heading } from "@chakra-ui/react";
import { IGameQueryBy } from "./App";


interface Props {
    gameQueryBy: IGameQueryBy;
}

const GamesHeading = ({ gameQueryBy }: Props) => {
    const title = `${gameQueryBy.platform?.name || ''} ${gameQueryBy.genre?.name || ''} Games`

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {title}
        </Heading>

    );
}

export default GamesHeading;
