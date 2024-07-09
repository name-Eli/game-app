import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryState from "../states/gameQueryState";

const SortSelector = () => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-add', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Rating' },
    ];

    const sortOrder = useGameQueryState(state => state.gameQueryBy.sortOrder);
    const setSortOrder = useGameQueryState(state => state.setSortOrder);

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {
                    sortOrders.map(order =>
                        <MenuItem
                            onClick={() => setSortOrder(order.value)}
                            key={order.value}
                            value={order.value}
                        >
                            {order.label}
                        </MenuItem>
                    )
                }
            </MenuList>
        </Menu>
    );
}

export default SortSelector;