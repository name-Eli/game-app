import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.jpeg';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack marginBottom={3}>
            <Image src={logo} boxSize='60px' />
            <SearchBar onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;