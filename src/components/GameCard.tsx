import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating";
import getSmallImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

interface Props {
    game: IGame
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden' _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in' }}>
            <Image src={getSmallImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <Rating rating={game.rating} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={`/games/${game.slug}`}>
                        {game.name}
                    </Link>
                    <Emoji rating={game.rating} />
                </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;