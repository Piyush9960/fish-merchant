// import React from "react";
// import Reducer from '../Reducer/Reducer'

export const initialState = {
  cart: [],
  counter: 0
};

export type State = typeof initialState;

export type Action = 
| { type: "ADD_TO_CART"}
| { type: "REMOVE_FROM_CART"}
| { type: "ADD_COUNTER"}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                counter: state.counter + 1,
                // cart: [...action]

                // cart: state.cart.push(action)
            }
        case "ADD_COUNTER" :
            return {
                ...state,
                counter: state.counter + 1
            }

        default:
            return state;
            
    }
}