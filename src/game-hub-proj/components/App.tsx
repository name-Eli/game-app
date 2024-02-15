import { Box, Grid, GridItem, HStack, Heading, Show } from '@chakra-ui/react'
import NavBar from './NavBar';
import GameGrid from './GameGrid';
import GenreList from './GenreList';
import { IGenre } from '../hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './PlatformSelector';
import { IPlatform } from '../hooks/usePlatform';
import SortSelector from './SortSelector';
import GamesHeading from './GamesHeading';

export interface IGameQueryBy {
    genre: IGenre | null;
    platform: IPlatform | null;
    sortOrder: string;
    searchText: string;
}

const App = () => {
    const [gameQueryBy, setGameQueryBy] = useState<IGameQueryBy>({} as IGameQueryBy);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <GridItem area="nav">
                <NavBar onSearch={(searchText) => setGameQueryBy({ ...gameQueryBy, searchText })} />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside'>
                    <GenreList selectedGenre={gameQueryBy.genre} onGenreSelected={(genre: IGenre) => setGameQueryBy({ ...gameQueryBy, genre })} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GamesHeading gameQueryBy={gameQueryBy} />
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQueryBy.platform} onSelectedPlatform={(platform: IPlatform) => setGameQueryBy({ ...gameQueryBy, platform })} />
                        <SortSelector sortOrder={gameQueryBy.sortOrder} onSelectSortOrder={(sortOrder) => setGameQueryBy({ ...gameQueryBy, sortOrder })} />
                    </HStack>
                </Box>
                <GameGrid gameQueryBy={gameQueryBy} />
            </GridItem>
        </Grid>
    );
}

export default App;