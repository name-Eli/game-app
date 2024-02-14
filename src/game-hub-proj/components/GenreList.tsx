import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getSmallImageUrl from "../services/image-url";

interface Props {
    selectedGenre: Genre | null;
    onGenreSelected: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onGenreSelected }: Props) => {
    const { genres, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />

    return (
        <List padding={0}>
            {
                genres?.map(genre =>
                    <ListItem key={genre.id} paddingY='7px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getSmallImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => onGenreSelected(genre)}
                                variant='link'
                                fontSize='lg'
                                margin={0}
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )
            }
        </List>
    );
}

export default GenreList;