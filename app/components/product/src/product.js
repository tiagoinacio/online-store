import React from 'react';
import PropTypes from 'prop-types';

import { ProductImage } from '../../product-image';
import { ProductDetails } from '../../product-details';
import './product.scss';

/**
 * Product component
 * @name Product
 * @function
 *
 * @extends {React.Component}
 */
export class Product extends React.Component {
    /**
     * renders the Product section
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <article className="product" itemScope itemType="http://schema.org/Product">
                <ProductImage
                    src={require('../../../assets/images/img01.png')}
                    onAddToWishlistClick={this.props.onAddToWishlistClick}
                    productId={this.props.product.id}
                    isProductInWishlist={this.props.isProductInWishlist}
                />
                <ProductDetails
                    product={this.props.product}
                    onAddToCartClick={this.props.onAddToCartClick}
                    isProductInCart={this.props.isProductInCart}
                />
            </article>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToWishlistClick: PropTypes.func.isRequired,
    isProductInWishlist: PropTypes.bool.isRequired,
    onAddToCartClick: PropTypes.func.isRequired,
    isProductInCart: PropTypes.bool.isRequired
};
