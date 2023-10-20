import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

import { IState, initialState } from "../constants/utils";

export type ContextType = {
    isMenuActive: boolean,
    setIsMenuActive: Dispatch<SetStateAction<boolean>>;
    isClicked: IState,
    setIsClicked: Dispatch<SetStateAction<IState>>;
    handleClick: (clicked: string) => void
}

const StateContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<IState>(initialState);

    const handleClick = (clicked: string) => {
        setIsClicked({...initialState, [clicked]: true});
    }
    
    return (
        <StateContext.Provider value={{
            isMenuActive, 
            setIsMenuActive,
            isClicked, setIsClicked,
            handleClick
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);