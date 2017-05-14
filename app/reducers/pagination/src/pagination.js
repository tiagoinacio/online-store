const defaultState = {
    currentPage: 1
};

const previousPage = (state) => ({
    currentPage: state.currentPage - 1
});

const goToPage = (action) => ({
    currentPage: action.payload
});

const nextPage = (state) => ({
    currentPage: state.currentPage + 1
});

export const PaginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE': return nextPage(state);
        case 'PREVIOUS_PAGE': return previousPage(state);
        case 'GO_TO_PAGE': return goToPage(action);
    }
    return state;
};
