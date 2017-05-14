import { addToCart, addToWishlist, nextPage, previousPage, goToPage } from '../src/actions';

describe('addToCart', () => {
    it('should create an action to add to cart', () => {
        const action = addToCart({
            id: '1',
            price: 2
        });

        expect(action).toEqual(
            {
                type: 'ADD_TO_CART',
                payload: {
                    id: '1',
                    price: 2
                }
            }
        );
    });
});

describe('addToWishlist', () => {
    it('should create an action to add to wishlist', () => {
        const action = addToWishlist('1');

        expect(action).toEqual(
            {
                type: 'ADD_TO_WISHLIST',
                payload: '1'
            }
        );
    });
});

describe('goToPage', () => {
    it('should create an action to go to page', () => {
        const action = goToPage(10);

        expect(action).toEqual(
            {
                type: 'GO_TO_PAGE',
                payload: 10
            }
        );
    });
});

describe('nextPage', () => {
    it('should create an action to go to the next page', () => {
        const action = nextPage();

        expect(action).toEqual(
            {
                type: 'NEXT_PAGE'
            }
        );
    });
});

describe('previousPage', () => {
    it('should create an action to go to the previous page', () => {
        const action = previousPage();

        expect(action).toEqual(
            {
                type: 'PREVIOUS_PAGE'
            }
        );
    });
});