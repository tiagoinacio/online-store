import React from 'react';

import './product.scss';

export class Product extends React.Component {

    getPrice() {
        if (this.props.product.priceDiscounted) {
            return <div className="product__price" itemScope itemType="http://schema.org/Offer">
                <span className="product__price--strike">£{this.props.product.price}</span>
                <span className="product__price--discounted" itemProp="price">
                £{this.props.product.priceDiscounted}
                </span>
                </div>;
        }
        return <div className="product__price" itemScope itemType="http://schema.org/Offer">
                <span className="product__price" itemProp="price">
                £{this.props.product.price}
                </span>
                </div>;
        
    }

    getAddToCartButton() {
        if (this.props.isProductInCart) {
            return (
                <button 
                    className="product__add-to-cart button button--primary button--in-cart"
                    onClick={() => this.props.onAddToCartClick(this.props.product)}>
                    In Cart
                </button>
            );
        }
        return (
            <button 
                className="product__add-to-cart button button--primary"
                onClick={() => this.props.onAddToCartClick(this.props.product)}>
                Add to Cart
            </button>
        );
    }

    getWishlistButtonClass() {
        const wishlistButtonClass = 'product__wishlist-button button button--round button--wishlist';
        
        if (this.props.isProductInWishlist) {
            return wishlistButtonClass + ' product__wishlist-button--active';
        }
        return wishlistButtonClass;
    }

    render() {
        return (
            <article className="product" itemScope itemType="http://schema.org/Product">
                <figure className="product__image-wrapper">
                    <img className="product__image" src={require('../../../assets/images/img01.png')} alt="Product" itemProp="image" />
                    <button onClick={() => this.props.onAddToWishlistClick(this.props.product.id)} className={this.getWishlistButtonClass()}>
                        <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>Wishlist Icon</title>
                            <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                        </svg>
                    </button>
                </figure>
                <div className="product__details">
                    <h1 className="product__title" itemProp="brand">{this.props.product.title}</h1>
                    <p className="product__subtitle" itemProp="description">{this.props.product.subtitle}</p>
                    {this.getPrice()}
                    {this.getAddToCartButton()}
                </div>
            </article>
        );
    }
}

Product.propTypes = {

};