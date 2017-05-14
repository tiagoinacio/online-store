import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';

import SVGInline from 'react-svg-inline';
import bagIcon from '../../../assets/svg/bag.svg';
import wishlistIcon from '../../../assets/svg/wishlist.svg';
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

HeaderContainer.propTypes = {
    title: PropTypes.string.isRequired,
    cart: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired
};

const mapStateToProps = state => (
    {
        cart: state.cart,
        wishlist: state.wishlist
    }
);

export const Header = connect(mapStateToProps)(HeaderContainer);
