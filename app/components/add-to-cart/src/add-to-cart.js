import React from 'react';
import PropTypes from 'prop-types';

/**
 * Add To Cart component
 * @name AddToCart
 * @function
 *
 * @extends {React.Component}
 */
export class AddToCart extends React.Component {

    /**
     * renders the Add To Cart component based on if the product is already in cart or not
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        if (this.props.isProductInCart) {
            return (
                <button className="product__add-to-cart button button--primary button--in-cart"
                    onClick={() => this.props.onAddToCartClick(this.props.product)}>
                    In Cart
                </button>
            );
        }
        return (
            <button className="product__add-to-cart button button--primary"
                onClick={() => this.props.onAddToCartClick(this.props.product)}>
                Add to Cart
            </button>
        );
    }
}

AddToCart.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCartClick: PropTypes.func.isRequired,
    isProductInCart: PropTypes.bool.isRequired
};
