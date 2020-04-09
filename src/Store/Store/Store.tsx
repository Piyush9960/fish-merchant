// import React, {createContext, useReducer} from "react";
// import Reducer from '../Reducer/Reducer'

// interface IContextProps {
//     state: {
//         cart: string[],
//         error: null
//     };
//     dispatch: ({type}:{type:string}) => void;
//   }
// const initialState = {
//     cart: [""],
//     error: null
// };

// const Store = ({children}: {children: any}) => {
//     const [state, dispatch] = useReducer(Reducer, initialState);
//     const value = {state, dispatch}
//     return (
//         <Context.Provider value={[state, dispatch]}>
//             {children}
//         </Context.Provider>
//     )
// };

// export const Context = createContext({} as IContextProps);
// export default Store;

import React from 'react'

const Store = () => {
    return (
        <div>
            
        </div>
    )
}

export default Store;
