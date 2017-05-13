import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import configuration from '../../../config.json';
import { addToCart, addToWishlist } from '../../../actions';
import { Product } from '../../../components/product';

import './products-list.scss';

class ProductsListContainer extends React.Component {

    isProductInCart(productId) {
        return this.props.productsInCart.includes(productId);
    }

    isProductInWishlist(productId) {
        return this.props.productsInWishlist.includes(productId);
    }

    createListOfProducts() {
        const maxRange = this.props.pagination.currentPage * configuration.productsPerPage;

        return this.props.products
            .filter((_, index) => index < maxRange && index >= (maxRange - 6))
            .map(product => (
                <li key={product.id} className="product-list__item">
                    <Product product={product} 
                        isProductInCart={this.isProductInCart(product.id)}
                        isProductInWishlist={this.isProductInWishlist(product.id)}
                        onAddToCartClick={this.props.addToCart}
                        onAddToWishlistClick={this.props.addToWishlist} />
                </li>
            ));
    }

    render() {
        return (
            <ul className="product-list">
                {this.createListOfProducts()}
            </ul>
        );
    }
}

const mapStateToProps = state => (
    { 
        products: state.products,
        pagination: state.pagination,
        productsInCart: state.cart.products,
        productsInWishlist: state.wishlist.products
    }
);
const matchDispatchToProps = dispatch => bindActionCreators(
    { 
        addToCart,
        addToWishlist
    }, 
    dispatch
);

export const ProductsList = connect(mapStateToProps, matchDispatchToProps)(ProductsListContainer);