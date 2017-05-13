const defaultState = {
    currentPage: 1
};

const previousPage = (state, action) => ({
    currentPage: state.currentPage - 1
});

const goToPage = (state, action) => ({
    currentPage: action.payload
});

const nextPage = (state, action) => ({
    currentPage: state.currentPage + 1
});

export const PaginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE': return nextPage(state, action);
        case 'PREVIOUS_PAGE': return previousPage(state, action);
        case 'GO_TO_PAGE': return goToPage(state, action);
    }
    return state;
};