import React from 'react'
import { mount } from 'enzyme'
import { AddToCart } from '../src/add-to-cart';

function init(isProductInCart) {
    const props = {
        product: {},
        onAddToCartClick: jest.fn(),
        isProductInCart
    };

    const enzymeWrapper = mount(<AddToCart {...props} />)

    return {
        props,
        enzymeWrapper
    };
}

const setup = {
    props: {},
    enzymeWrapper: {}
};

describe('AddToCart', function () {

    describe('when the product is in the cart', function () {
        beforeEach(function () {
            const newSetup = init(true);

            setup.props = newSetup.props;
            setup.enzymeWrapper = newSetup.enzymeWrapper;
        });

        it('should render the button', function () { 
            expect(setup.enzymeWrapper.find('button').hasClass('product__add-to-cart')).toBe(true);
        });

        it('should render the label "In Cart"', function () {
            expect(setup.enzymeWrapper.find('button').text()).toBe('In Cart');
        });

        it('should set the onClick to the callback function', function () {
            setup.enzymeWrapper.find('button').simulate('click');

            expect(setup.props.onAddToCartClick.mock.calls.length).toBe(1);
        });
    });

    describe('when the product is not in the cart', function () {
        beforeEach(function () {
            const newSetup = init(false);

            setup.props = newSetup.props;
            setup.enzymeWrapper = newSetup.enzymeWrapper;
        });

        it('should render the button', function () {
            expect(setup.enzymeWrapper.find('button').hasClass('product__add-to-cart')).toBe(true);
        });

        it('should render the label "Add to Cart"', function () {
            expect(setup.enzymeWrapper.find('button').text()).toBe('Add to Cart');
        });

        it('should set the onClick to the callback function', function () {
            setup.enzymeWrapper.find('button').simulate('click');

            expect(setup.props.onAddToCartClick.mock.calls.length).toBe(1);
        });
    });
});