import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from "react-svg-inline";

import wishlistIcon from '../../../assets/svg/wishlist.svg';

/**
 * Product Image component
 * @name ProductImage
 * @function
 *
 * @extends {React.Component}
 */
export class ProductImage extends React.Component {

    /**
     * get wishlist button class based on if the product is in the wishlist or not
     *
     * @name getWishlistButtonClass
     * @function
     * @param {bool } isProductInWishlist is product in wishlist
     * @returns {String} wishlist button class
     */
    getWishlistButtonClass(isProductInWishlist) {
        const wishlistButtonClass = 'product__wishlist-button button button--round button--wishlist';

        if (isProductInWishlist) {
            return `${wishlistButtonClass} product__wishlist-button--active`;
        }
        return wishlistButtonClass;
    }

    /**
     * renders the product image section
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <figure className="product__image-wrapper">
                <img className="product__image" src={this.props.src} alt="Product" itemProp="image" />
                <button onClick={() => this.props.onAddToWishlistClick(this.props.productId)}
                    className={this.getWishlistButtonClass(this.props.isProductInWishlist)}>
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
