import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './NavBar';
import GameGrid from './GameGrid';
import GenreList from './GenreList';
import { IGenre } from '../hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './PlatformSelector';
import { IPlatform } from '../hooks/usePlatform';
import SortSelector from './SortSelector';

export interface IGameQueryBy {
    genre: IGenre | null;
    platform: IPlatform | null;
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
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside'>
                    <GenreList selectedGenre={gameQueryBy.genre} onGenreSelected={(genre: IGenre) => setGameQueryBy({ ...gameQueryBy, genre })} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector selectedPlatform={gameQueryBy.platform} onSelectedPlatform={(platform: IPlatform) => setGameQueryBy({ ...gameQueryBy, platform })} />
                    <SortSelector />
                </HStack>
                <GameGrid gameQueryBy={gameQueryBy} />
            </GridItem>
        </Grid>
    );
}

export default App;