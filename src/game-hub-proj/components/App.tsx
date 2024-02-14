import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './NavBar';
import GameGrid from './GameGrid';
import GenreList from './GenreList';

const App = () => {
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside'>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;