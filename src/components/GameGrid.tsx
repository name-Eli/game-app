import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { IGameQueryBy } from "./App";

interface Props {
    gameQueryBy: IGameQueryBy
}

const GameGrid = ({ gameQueryBy }: Props) => {

    const { games, error, isLoading } = useGames(gameQueryBy);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error}</Text>;

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding='10px'
            spacing={6}>
            {
                isLoading ?
                    skeletons.map(skeleton =>
                        <GameCardSkeleton key={skeleton} />)
                    :
                    games?.map(game =>
                        <GameCard key={game.id} game={game} />)
            }
        </SimpleGrid>
    );
}

export default GameGrid;