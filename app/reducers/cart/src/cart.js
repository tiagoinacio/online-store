const defaultState = {
    total: 0,
    products: []
};

const addToCart = (state, action) => {
    const index = state.products.findIndex((id) => id === action.payload.id);

    if (index === -1) {
        return {
            total: state.total + Number(action.payload.price),
            products: state.products.concat(action.payload.id)
        };
    }    

    return {
        total: state.total - Number(action.payload.price),
        products: state.products.filter((product) => product !== state.products[index])
    };
}

export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
    }
    return state;
};