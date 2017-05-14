/**
 * default state
 */
const defaultState = {
    products: []
};

/**
 * add to wishlist or remove it if the product is already there
 *
 * @name addToWishlist
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} new state
 */
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

/**
 * Wishlist Reducer
 *
 * @name WishlistReducer
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} new state
 */
export const WishlistReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST': return addToWishlist(state, action);
    }
    return state;
};
