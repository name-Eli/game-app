import { SimpleGrid } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import Rating from "./Rating";
import IGame from "../entities/IGame";


interface Props {
    game: IGame;
}

const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid as='dl' columns={2}>
            <DefinitionItem title='Platforms'>
                {game.parent_platforms?.map(({ platform }) =>
                    <div key={platform.id}>{platform.name}</div>
                )}
            </DefinitionItem>
            <DefinitionItem title='Rating'>
                <Rating rating={game.rating} />
            </DefinitionItem>
            <DefinitionItem title='Genres'>
                {game.genres.map(genre =>
                    <div key={genre.id}>{genre.name}</div>
                )}
            </DefinitionItem>
            <DefinitionItem title='Publishers'>
                {game.publishers?.map(publisher =>
                    <div key={publisher.id}>{publisher.name}</div>
                )}
            </DefinitionItem>
        </SimpleGrid>
    )
}

export default GameAttributes;