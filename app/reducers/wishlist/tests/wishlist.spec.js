import { WishlistReducer } from '../src/wishlist';

describe('WishlistReducer', () => {
    describe('without any previous action', () => {
        it('should return the initial state', () => {
            expect(WishlistReducer(undefined, {})).toEqual(
                {
                    products: []
                }
            )
        });
    });

    describe('on first ADD_TO_WISHLIST action', () => {
        it('should append the product the state', () => {
            expect(
                WishlistReducer(undefined, {
                    type: 'ADD_TO_WISHLIST',
                    payload: '1'
                })
            ).toEqual({
                products: ['1']
            })
        });
    });

    describe('on consequent ADD_TO_WISHLIST actions', () => {
        describe('when the product is not on the wishlist', function () {
            it('should append the product to the state', () => {
                expect(
                    WishlistReducer({
                        products: ['1', '4', '5']
                    }, {
                            type: 'ADD_TO_WISHLIST',
                            payload: '9'
                        })
                ).toEqual({
                    products: ['1', '4', '5', '9']
                })
            });
        });

        describe('when the product is already on the wishlist', function () {
            it('should remove the product from wishlist', () => {
                expect(
                    WishlistReducer({
                        products: ['1', '4', '5']
                    }, {
                            type: 'ADD_TO_WISHLIST',
                            payload: '5'
                        })
                ).toEqual({
                    products: ['1', '4']
                })
            });
        });
    });
});