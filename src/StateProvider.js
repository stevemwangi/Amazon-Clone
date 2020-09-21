import React, { createContext, useContext, useReducer } from 'react';

/** The Data Layer */
export const StateContext = createContext(); 

/** Provider */
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

/** Use across Components */
export const useStateValue = () => useContext(StateContext);