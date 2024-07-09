import { Heading } from "@chakra-ui/react";
import useGameQueryState from "../states/gameQueryState";

const GamesHeading = () => {

    const selctedGenre = useGameQueryState(state => state.gameQueryBy.genre);
    const selectedPlatform = useGameQueryState(state => state.gameQueryBy.platform);

    const title = `${selectedPlatform?.name || ''} ${selctedGenre?.name || ''} Games`

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {title}
        </Heading>

    );
}

export default GamesHeading;
