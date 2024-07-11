import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.jpeg';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <HStack marginBottom={3}>
            <Link to="/">
                <Image src={logo} boxSize='60px' objectFit='cover' />
            </Link>
            <SearchBar />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;