
const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_TO_CART':
            return {
                ...state,
                cart: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                // posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;