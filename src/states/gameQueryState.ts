import { create } from "zustand";
import { IGenre } from "../entities/IGenre";
import { IPlatform } from "../entities/IPlatform";


interface IGameQueryBy {
    searchText?: string;
    genre?: IGenre;
    platform?: IPlatform;
    sortOrder?: string;
}

interface IGameQueryStore {
    gameQueryBy: IGameQueryBy;
    setSearchText: (searchText: string) => void;
    setSelectedGenre: (genre: IGenre) => void;
    setSelectedPlatform: (platform: IPlatform) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryState = create<IGameQueryStore>(set => ({
    gameQueryBy: ({} as IGameQueryBy),
    setSearchText: (searchText) => set(() => ({ gameQueryBy: { searchText } })),
    setSelectedGenre: (genre) => set(currentState => ({ gameQueryBy: { ...currentState.gameQueryBy, genre } })),
    setSelectedPlatform: (platform) => set(currentState => ({ gameQueryBy: { ...currentState.gameQueryBy, platform } })),
    setSortOrder: (sortOrder) => set(currentState => ({ gameQueryBy: { ...currentState.gameQueryBy, sortOrder } })),
}));

export default useGameQueryState;

