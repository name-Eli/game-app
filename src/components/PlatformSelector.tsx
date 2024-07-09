import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import useGameQueryState from "../states/gameQueryState";

const PlatformSelector = () => {

    //Server state
    const { data, error } = usePlatforms();

    //Client state
    const selectedPlatform = useGameQueryState(state => state.gameQueryBy.platform);
    const setSelectedPlatform = useGameQueryState(state => state.setSelectedPlatform);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform =>
                    <MenuItem
                        onClick={() => setSelectedPlatform(platform)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;