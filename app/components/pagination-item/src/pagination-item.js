import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';

export class PaginationItem extends React.Component {

    getItemClass(isDisabled) {
        if (isDisabled) {
            return 'pagination__link pagination__link--disabled';
        }
        return 'pagination__link';
    }

    onClick() {
        if (typeof this.props.onItemClick === 'function') {
            this.props.onItemClick();
        }
    }

    getLabel(svgIcon, label) {
        if (svgIcon) {
            return <SVGInline svg={svgIcon} />;
        }
        return label;
    }

    render() {
        return (
            <li className="pagination__item">
                <a onClick={() => this.onClick()} className={this.getItemClass(this.props.isDisabled)}>
                    {this.getLabel(this.props.svg, this.props.label)}
                </a>
            </li>
       );
    }
}

PaginationItem.propTypes = {
    isDisabled: PropTypes.bool,
    label: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    svg: PropTypes.any
};