import React from 'react';
import PropTypes from 'prop-types';

import { AddToCart } from '../../add-to-cart';
import { ProductPrice } from '../../product-price';

export class ProductDetails extends React.Component {
    render() {
        return (
            <div className="product__details">
                <h1 className="product__title" itemProp="brand">{this.props.product.title}</h1>
                <p className="product__subtitle" itemProp="description">{this.props.product.subtitle}</p>
                <ProductPrice 
                    price={this.props.product.price}
                    priceDiscounted={this.props.product.priceDiscounted}
                />
                <AddToCart 
                    product={this.props.product}
                    onAddToCartClick={this.props.onAddToCartClick}
                    isProductInCart={this.props.isProductInCart}
                />
            </div>
        );
    }
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCartClick: PropTypes.func.isRequired,
    isProductInCart: PropTypes.bool.isRequired
};