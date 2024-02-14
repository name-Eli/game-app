import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './NavBar';
import GameGrid from './GameGrid';
import GenreList from './GenreList';
import { Genre } from '../hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './PlatformSelector';
import { Platform } from '../hooks/usePlatform';

const App = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


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
                    <GenreList selectedGenre={selectedGenre} onGenreSelected={(genre: Genre) => setSelectedGenre(genre)} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform: Platform) => setSelectedPlatform(platform)} />
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
            </GridItem>
        </Grid>
    );
}

export default App;