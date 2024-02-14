import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import getSmallImageUrl from "../services/image-url";

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' width='300px'>
            <Image src={getSmallImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <Rating rating={game.rating} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;