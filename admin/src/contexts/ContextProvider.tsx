import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type ContextType = {
    isMenuActive: boolean,
    setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuActive, setIsMenuActive] = useState(true);

    
    return (
        <StateContext.Provider value={{
            isMenuActive, 
            setIsMenuActive
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);