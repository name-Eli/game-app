import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Rating, { ratingChecker } from "./Rating";
import getSmallImageUrl from "../services/image-url";

interface Props {
    game: IGame
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={getSmallImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <Rating rating={game.rating} />
                </HStack>
                <Heading fontSize='2xl'>{`${game.name} ${ratingChecker(game.rating, ['🎯', '👍', '🩻'])}`}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;