import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { useEffect, useState } from "react";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {

    const { games, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (<>
        {error && <Text>{error}</Text>}
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            padding='10px'
            spacing={3}>
            {
                isLoading ?
                    skeletons.map(skeleton =>
                        <GameCardSkeleton key={skeleton} />)
                    :
                    games?.map(game =>
                        <GameCard key={game.id} game={game} />)
            }
        </SimpleGrid>
    </>
    );
}

export default GameGrid;