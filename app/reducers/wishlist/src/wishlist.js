const defaultState = {
    products: []
};

const addToWishlist = (state, action) => {
    if (state.products.includes(action.payload)) {
        return {
            products: state.products.filter((id) => id !== action.payload)
        };
    }
    return {
        products: state.products.concat(action.payload)
    };
};

export const WishlistReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST': return addToWishlist(state, action);
    }
    return state;
};