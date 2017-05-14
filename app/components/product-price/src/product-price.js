import React from 'react';
import PropTypes from 'prop-types';

/**
 * Product Price component
 * @name ProductPrice
 * @function
 *
 * @extends {React.Component}
 */
export class ProductPrice extends React.Component {
    /**
     * renders the Product Price section
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        if (this.props.priceDiscounted) {
            return (
                <div className="product__price" itemScope itemType="http://schema.org/Offer">
                    <span className="product__price--strike">£{this.props.price}</span>
                    <span className="product__price--discounted" itemProp="price">
                        £{this.props.priceDiscounted}
                    </span>
                </div>
            );
        }
        return (
            <div className="product__price" itemScope itemType="http://schema.org/Offer">
                <span className="product__price" itemProp="price">
                    £{this.props.price}
                </span>
            </div>
        );
    }
}

ProductPrice.propTypes = {
    price: PropTypes.string.isRequired,
    priceDiscounted: PropTypes.string
};
