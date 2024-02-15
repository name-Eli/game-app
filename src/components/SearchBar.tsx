import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { KeyboardEvent } from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            const searchText = (event.target as HTMLTextAreaElement).value;
            if (searchText) {
                onSearch(searchText)
            }
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