/**
 * default state
 */
const defaultState = {
    selectedPage: 1
};

/**
 * previous page
 *
 * @name previousPage
 * @function
 * @param {Object} state state
 * @returns {Object} new state
 */
const previousPage = (state) => ({
    selectedPage: state.selectedPage - 1
});

/**
 * go to page
 *
 * @name goToPage
 * @function
 * @param {Object} action object with payload which is the page to go to
 * @returns {Object} new state
 */
const goToPage = (action) => ({
    selectedPage: action.payload
});

/**
 * next page
 *
 * @name nextPage
 * @function
 * @param {Object} state state
 * @returns {Object} new state
 */
const nextPage = (state) => ({
    selectedPage: state.selectedPage + 1
});

/**
 * Pagination Reducer
 *
 * @name PaginationReducer
 * @function
 * @param {Object} state state
 * @param {Object} action action
 * @returns {Object} new state
 */
export const PaginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE': return nextPage(state);
        case 'PREVIOUS_PAGE': return previousPage(state);
        case 'GO_TO_PAGE': return goToPage(action);
    }
    return state;
};
