import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { IGameQueryBy } from "./App";
import React from "react";

interface Props {
    gameQueryBy: IGameQueryBy
}

const GameGrid = ({ gameQueryBy }: Props) => {

    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQueryBy);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
        <Box padding='10px'>
            <SimpleGrid
                columns={{ 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4, '2xl': 5 }}
                spacing={6}>
                {
                    isLoading ?
                        skeletons.map(skeleton =>
                            <GameCardSkeleton key={skeleton} />)
                        :
                        data?.pages.map((page, index) =>
                            <React.Fragment key={index}>
                                {page.results.map(game =>
                                    <GameCard key={game.id} game={game} />)}
                            </React.Fragment>
                        )
                }
            </SimpleGrid>
            {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>
                {isFetchingNextPage ? 'Loading...' : 'Load more'}
            </Button>}
        </Box>
    );
}

export default GameGrid;