import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getSmallImageUrl from "../services/image-url";


const GenreList = () => {
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
                            <Text fontSize='lg' margin={0}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                )
            }
        </List>
    );
}

export default GenreList;