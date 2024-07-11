import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import ScreenshotSkeleton from "./ScreenshotSkeleton";


interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenshots(gameId);

    if (error) throw error;

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {isLoading ?
                skeletons.map(skeleton => <ScreenshotSkeleton key={skeleton} />)
                :
                data?.results.map(screenshot =>
                    <Image key={screenshot.id} src={screenshot.image} />
                )}
        </SimpleGrid>
    )

}

export default GameScreenshots;