import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getSmallImageUrl from "../services/image-url";


const GenreList = () => {
    const { genres } = useGenres();

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