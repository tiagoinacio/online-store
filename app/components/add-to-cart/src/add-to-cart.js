import React from 'react';
import PropTypes from 'prop-types';

export class AddToCart extends React.Component {

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