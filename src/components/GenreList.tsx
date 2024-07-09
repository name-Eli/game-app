import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getSmallImageUrl from "../services/image-url";
import useGameQueryState from "../states/gameQueryState";

const GenreList = () => {

    //Server state
    const { data, error, isLoading } = useGenres();

    //Client state
    const selectedGenre = useGameQueryState(state => state.gameQueryBy.genre);
    const setSelectedGenre = useGameQueryState(state => state.setSelectedGenre);

    if (error) return null;
    if (isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List padding={0}>
                {
                    data?.results.map(genre =>
                        <ListItem key={genre.id} paddingY='7px'>
                            <HStack>
                                <Image
                                    boxSize='32px'
                                    borderRadius={8}
                                    src={getSmallImageUrl(genre.image_background)}
                                    objectFit='cover'
                                />
                                <Button
                                    onClick={() => setSelectedGenre(genre)}
                                    variant='link'
                                    fontSize='lg'
                                    margin={0}
                                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                    whiteSpace='normal'
                                    textAlign='left'
                                >
                                    {genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    )
                }
            </List>
        </>
    );
}

export default GenreList;