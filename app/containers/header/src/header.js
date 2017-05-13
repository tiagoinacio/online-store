import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './header.scss';

export class HeaderContainer extends React.Component {
    render() {
        return (
            <header className="header container">
                <h1 className="page-title">{this.props.title}</h1>
                <aside className="header-bag">
                    <div className="header-bag__item header-bag__count">
                        <div className="header-bag__price">
                            £{this.props.cart.total}
                        </div>
                        <svg className="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>Bag Icon</title>
                            <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fillRule="evenodd"></path>
                        </svg>
                        <span className="bag__item-counter">{this.props.cart.products.length}</span>
                    </div>
                    <div className="header-bag__item header-bag__wishlist-count">
                        <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>Wishlist Icon</title>
                            <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                        </svg>
                        <span className="bag__item-counter">{this.props.wishlist.products.length}</span>
                    </div>
                </aside>
            </header>
        );
    }
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
//     cart: PropTypes.object.isRequired,
//     wishlist: PropTypes.array.isRequired
// };

const mapStateToProps = state => (
    {
        cart: state.cart,
        wishlist: state.wishlist
    }
);

export const Header = connect(mapStateToProps)(HeaderContainer);