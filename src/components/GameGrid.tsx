import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { IGameQueryBy } from "./App";

interface Props {
    gameQueryBy: IGameQueryBy
}

const GameGrid = ({ gameQueryBy }: Props) => {

    const { data: games, error, isLoading } = useGames(gameQueryBy);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
        <SimpleGrid
            columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
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