import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

/**
 * Pagination Item Component
 * @name PaginationItem
 * @function
 *
 * @extends {React.Component}
 */
export class PaginationItem extends React.Component {

    /**
     * get item class based on the active and disabled state
     *
     * @name getItemClass
     * @function
     * @param {bool} isDisabled is disabled
     * @param {bool} isActive is active
     * @returns {string} class name
     */
    getItemClass(isDisabled, isActive) {
        const className = 'pagination__link';

        if (isDisabled) {
            return `${className} pagination__link--disabled`;
        }

        if (isActive) {
            return `${className} pagination__link--active`;
        }
        return className;
    }

    /**
     * on click, if we defined a callback function, we call it
     *
     * @name onClick
     * @function
     */
    onClick() {
        if (typeof this.props.onItemClick === 'function') {
            this.props.onItemClick();
        }
    }

    /**
     * if we have an svg icon, we print that, if not, we print the label
     *
     * @name getLabel
     * @function
     * @param {string} svgIcon svg icon
     * @param {string} label label
     * @returns {string} label or svg
     */
    getLabel(svgIcon, label) {
        if (svgIcon) {
            return <SVGInline svg={svgIcon} />;
        }
        return label;
    }

    /**
     * renders the markup
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <li className="pagination__item">
                <a onClick={() => this.onClick()}
                    className={this.getItemClass(this.props.isDisabled, this.props.isActive)}>
                    {this.getLabel(this.props.svg, this.props.label)}
                </a>
            </li>
       );
    }
}

PaginationItem.propTypes = {
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    svg: PropTypes.any
};
