import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';

import SVGInline from 'react-svg-inline';
import bagIcon from '../../../assets/svg/bag.svg';
import wishlistIcon from '../../../assets/svg/wishlist.svg';
import './header.scss';

/**
 * Header class which renders the top bar of the application
 * @name HeaderContainer
 * @function
 *
 * @extends {React.Component}
 */
export class HeaderContainer extends React.Component {
    /**
     * Renders all the header components
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <header className="header container">
                <h1 className="page-title">{this.props.title}</h1>
                <aside className="header-bag">
                    <div className="header-bag__item header-bag__count">
                        <div className="header-bag__price">
                            £{this.props.cart.total}
                        </div>
                        <SVGInline svg={bagIcon} />
                        <span className="bag__item-counter">{this.props.cart.products.length}</span>
                    </div>
                    <div className="header-bag__item header-bag__wishlist-count">
                        <SVGInline svg={wishlistIcon} />
                        <span className="bag__item-counter">{this.props.wishlist.products.length}</span>
                    </div>
                </aside>
            </header>
        );
    }
}

// type checking for the props properties
HeaderContainer.propTypes = {
    title: PropTypes.string.isRequired,
    cart: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired
};

/**
 * maps the necessary state to the props object
 *
 * @name mapStateToProps
 * @function
 * @param {Object} state the state of the application
 * @returns {Object} the props properties which maps to the state
 */
const mapStateToProps = state => (
    {
        cart: state.cart,
        wishlist: state.wishlist
    }
);

/**
 * connect the new props mapped with the state and bind them to the component
 *
 * @name connect
 * @function
 * @param {function} mapStateToProps function which maps the state to the new props properties
 * @returns {function} the class component
 */
export const Header = connect(mapStateToProps)(HeaderContainer);
