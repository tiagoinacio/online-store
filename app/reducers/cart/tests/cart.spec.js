import { CartReducer } from '../src/cart';

describe('CartReducer', () => {
    describe('without any previous action', () => {
        it('should return the initial state', () => {
            expect(CartReducer(undefined, {})).toEqual(
                {
                    total: 0,
                    products: []
                }
            )
        });
    });
    
    describe('on first ADD_TO_CART action', () => {
        it('should append the product and total to the state', () => {
            expect(
                CartReducer(undefined, {
                    type: 'ADD_TO_CART',
                    payload: {
                        id: '1',
                        price: 15
                    }
                })
            ).toEqual({
                total: 15,
                products: ['1']
            })
        });
    });

    describe('on consequent ADD_TO_CART actions', () => {
        describe('when the product is not on the cart', function () {
            it('should append the product and total to the state', () => {
                expect(
                    CartReducer({
                        total: 47,
                        products: ['1', '4', '5']
                    }, {
                            type: 'ADD_TO_CART',
                            payload: {
                                id: '7',
                                price: 13
                            }
                        })
                ).toEqual({
                    total: 60,
                    products: ['1', '4', '5', '7']
                })
            });
        });

        describe('when the product is already on the cart', function () {
            it('should remove the product from cart and subtract the price from the total', () => {
                expect(
                    CartReducer({
                        total: 47,
                        products: ['1', '4', '5']
                    }, {
                            type: 'ADD_TO_CART',
                            payload: {
                                id: '1',
                                price: 13
                            }
                        })
                ).toEqual({
                    total: 34,
                    products: ['4', '5']
                })
            });
        });
    });
});