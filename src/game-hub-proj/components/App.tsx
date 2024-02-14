import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './NavBar';
import GameGrid from './GameGrid';
import GenreList from './GenreList';
import { Genre } from '../hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './PlatformSelector';

const App = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    function onGenreSelected(genre: Genre) {
        setSelectedGenre(genre);
    }

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
                    <GenreList selectedGenre={selectedGenre} onGenreSelected={onGenreSelected} />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <PlatformSelector />
                <GameGrid selectedGenre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}

export default App;