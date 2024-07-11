import { Skeleton, Image } from "@chakra-ui/react";


const ScreenshotSkeleton = () => {
    const screenshot_mock = 'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg';

    return (
        <Skeleton>
            <Image src={screenshot_mock} />
        </Skeleton>
    );
}

export default ScreenshotSkeleton;