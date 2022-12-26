import { createContext, useContext } from "react";

export const StateContext = createContext();

export const StateProvider =({initialState, children})=> {
    return (
        <StateContext.Provider value={initialState}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue =()=> useContext(StateContext);