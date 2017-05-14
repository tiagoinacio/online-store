/**
 * default state
 */
const defaultState = {
    total: 0,
    products: []
};

/**
 * add to cart
 * if the product is alrady in cart, we remove it
 *
 * @name addToCart
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} new state
 */
const addToCart = (state, action) => {
    const index = state.products.findIndex((id) => id === action.payload.id);

    if (index === -1) {
        // add to cart
        return {
            total: state.total + Number(action.payload.price),
            products: state.products.concat(action.payload.id)
        };
    }

    // remove from cart
    return {
        total: state.total - Number(action.payload.price),
        products: state.products.filter((product) => product !== state.products[index])
    };
}

/**
 * Cart Reducer
 *
 * @name CartReducer
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} state
 */
export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
    }
    return state;
};
