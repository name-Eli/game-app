import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {'Sort'}
            </MenuButton>
            <MenuList>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default SortSelector;