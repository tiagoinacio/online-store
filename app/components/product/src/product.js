import React from 'react';
import SVGInline from 'react-svg-inline';
import PropTypes from 'prop-types';

import { ProductImage } from '../../product-image';
import { ProductDetails } from '../../product-details';
import wishlistIcon from '../../../assets/svg/wishlist.svg';
import './product.scss';

export class Product extends React.Component {
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