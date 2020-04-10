import * as React from 'react';
import {Action, initialState, reducer, State} from './Store';


const { createContext, useContext, useReducer} = React;

const stateContext = createContext(initialState);

const dispatchContext = createContext((() => 0) as React.Dispatch<Action>);

export const Provider: React.ComponentType = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <dispatchContext.Provider value={dispatch}>
            <stateContext.Provider value={state}>
                {children}
            </stateContext.Provider>
        </dispatchContext.Provider>
    )
}

export const useDispatch = () => {
    return useContext(dispatchContext);
}

export const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(stateContext);
  return state[property]; // only one depth selector for comparison
};