import React                        from 'react';
import PropTypes                    from 'prop-types';
import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';

import configuration                from '../../../config.json';
import { addToCart, addToWishlist } from '../../../actions';
import { Product }                  from '../../../components/product';

import './products-list.scss';

/**
 * Products List component
 * @name ProductsListContainer
 * @function
 *
 * @extends {React.Component}
 */
class ProductsListContainer extends React.Component {

    /**
     * finds if the product is in the cart
     *
     * @name isProductInCart
     * @function
     * @param {Number} productId product id
     * @param {Array} productsInCart products in cart
     * @returns {bool} is product in cart
     */
    isProductInCart(productId, productsInCart) {
        return productsInCart.includes(productId);
    }

    /**
     * finds if the product is in the wishlist
     *
     * @name isProductInwishlist
     * @function
     * @param {Number} productId product id
     * @param {Array} productsInWishlist products in wishlist
     * @returns {bool} is product in wishlist
     */
    isProductInWishlist(productId, productsInWishlist) {
        return productsInWishlist.includes(productId);
    }

    /**
     * creates list of products
     *
     * @name createListOfProducts
     * @function
     * @param {Number} selectedPage selected page
     * @param {Array} products array of products
     * @returns {ReactElement} markup
     */
    createListOfProducts(selectedPage, products) {
        const maxRange = selectedPage * configuration.productsPerPage;

        return products
            .filter((_, index) => index < maxRange && index >= (maxRange - 6))
            .map(product => (
                <li key={product.id} className="product-list__item">
                    <Product product={product}
                        isProductInCart={this.isProductInCart(product.id, this.props.productsInCart)}
                        isProductInWishlist={this.isProductInWishlist(product.id, this.props.productsInWishlist)}
                        onAddToCartClick={this.props.addToCart}
                        onAddToWishlistClick={this.props.addToWishlist} />
                </li>
            ));
    }

    /**
     * creates the product list
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <ul className="product-list">
                {this.createListOfProducts(this.props.pagination.selectedPage, this.props.products)}
            </ul>
        );
    }
}

ProductsListContainer.propTypes = {
    products: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    productsInCart: PropTypes.array.isRequired,
    productsInWishlist: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    addToWishlist: PropTypes.func.isRequired
};

/**
 * map state to props
 *
 * @name mapStateToProps
 * @function
 * @param {Object} state state object
 * @returns {function} to bind new props with the state
 */
const mapStateToProps = state => (
    {
        products: state.products,
        pagination: state.pagination,
        productsInCart: state.cart.products,
        productsInWishlist: state.wishlist.products
    }
);

/**
 * bind the actions to the props object
 *
 * @name matchDispatchToProps
 * @function
 * @param {Object} dispatch dispatch
 * @returns {function} function to bind the actions to the props object
 */
const matchDispatchToProps = dispatch => bindActionCreators(
    {
        addToCart,
        addToWishlist
    },
    dispatch
);

/**
 * connects the state and actions to the component
 *
 * @name connect
 * @function
 * @param {function} mapStateToProps map state to props
 * @param {function} matchDispatchToProps map actions to props
 * @returns {function} ProductsList Component
 */
export const ProductsList = connect(mapStateToProps, matchDispatchToProps)(ProductsListContainer);
