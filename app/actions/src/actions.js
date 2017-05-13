export const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const addToWishlist = productId => ({
    type: 'ADD_TO_WISHLIST',
    payload: productId
});

export const nextPage = () => ({
    type: 'NEXT_PAGE'
});

export const previousPage = () => ({
    type: 'PREVIOUS_PAGE'
});

export const goToPage = (page) => ({
    type: 'GO_TO_PAGE',
    payload: page
});