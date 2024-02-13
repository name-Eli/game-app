import { useEffect, useState } from "react";
import api from '../services/api'
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
    rating: number;

}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}



const GameGrid = () => {
    const [games, setGames] = useState<Game[]>();
    const [error, setError] = useState();

    useEffect(() => {
        api.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    }, []);

    return (<>
        {error && <Text>{error}</Text>}
        <ul>
            {
                games?.map(game => <li key={game.id}>{game.name}</li>)
            }
        </ul>
    </>
    );
}

export default GameGrid;