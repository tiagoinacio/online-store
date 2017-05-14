import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from "react-svg-inline";

import wishlistIcon from '../../../assets/svg/wishlist.svg';

export class ProductImage extends React.Component {

    getWishlistButtonClass() {
        const wishlistButtonClass = 'product__wishlist-button button button--round button--wishlist';
        
        if (this.props.isProductInWishlist) {
            return wishlistButtonClass + ' product__wishlist-button--active';
        }
        return wishlistButtonClass;
    }

    render() {
        return (
            <figure className="product__image-wrapper">
                <img className="product__image" src={this.props.src} alt="Product" itemProp="image" />
                <button onClick={() => this.props.onAddToWishlistClick(this.props.productId)} className={this.getWishlistButtonClass()}>
                    <SVGInline svg={wishlistIcon} />
                </button>
            </figure>
        );
    }
}

ProductImage.propTypes = {
    productId: PropTypes.string.isRequired,
    onAddToWishlistClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    isProductInWishlist: PropTypes.bool.isRequired
};