import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.jpeg';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
        <HStack marginBottom={3}>
            <Image src={logo} boxSize='60px' />
            <SearchBar />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;