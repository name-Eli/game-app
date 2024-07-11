import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { KeyboardEvent } from "react";
import useGameQueryState from "../states/gameQueryState";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const setSearchText = useGameQueryState(state => state.setSearchText);
    const linkTo = useNavigate();

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            const searchText = (event.target as HTMLTextAreaElement).value;
            if (searchText) {
                setSearchText(searchText);
            }
            linkTo("/");
        }
    }

    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input onKeyDown={(event) => handleKeyDown(event)} borderRadius={20} placeholder="Search games..." variant='fille' />
        </InputGroup>
    );
}

export default SearchBar;