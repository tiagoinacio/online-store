import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './pagination.scss';

import configuration from '../../../config.json';
import { nextPage, previousPage, goToPage } from '../../../actions';

class PaginationContainer extends React.Component {

    getMaxNumberOfPages() {
        return this.props.products.length / configuration.productsPerPage;
    }
    
    previousPage() {
        if (this.props.pagination.currentPage > 1) {
            return this.props.previousPage();
        }
    }

    nextPage() {
        if (this.props.pagination.currentPage < this.getMaxNumberOfPages()) {
            return this.props.nextPage();
        }
    }

    getListOfNumberedPages() {
        const maxNumberOfPages = this.getMaxNumberOfPages();

        return Array
            .from(Array(maxNumberOfPages).keys())
            .filter((index) => {
                const diff = maxNumberOfPages - this.props.pagination.currentPage;
                const maxValue = this.props.pagination.currentPage + 3;
                const minValue = diff > 4
                    ? 
                    this.props.pagination.currentPage
                    :
                    maxNumberOfPages - 4;

                if (index >= minValue && index < maxValue && index !== 0) {
                    return true;
                }
                return false;
            })
            .map((index) => {
                if (this.props.pagination.currentPage === index) {
                    return <li key={index} className="pagination__item">
                        <a onClick={() => this.props.goToPage(index)} className="pagination__link pagination__link--selected">
                            {index}
                        </a>
                    </li>;
                }
                return <li key={index} className="pagination__item">
                    <a onClick={() => this.props.goToPage(index)} className="pagination__link">
                        {index}
                    </a>
                </li>;
            });
    }

    getGappedDots() {
        if (this.props.pagination.currentPage < (this.getMaxNumberOfPages() - 3)) {
            return <li className="pagination__item">
                <a className="pagination__link pagination__link--disabled">
                    ...
                </a>
            </li>;
        }
    }

    render() {
        return (
            <nav className="pagination">
                    <ul className="pagination__list">
                        <li className="pagination__item">
                            <a onClick={() => this.previousPage()} className="pagination__link">
                                <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Arrow Left</title>
                                    <polygon id="Left-Icon" stroke="none" fillRule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                                </svg>
                            </a>
                        </li>
                        {this.getListOfNumberedPages()}
                        {this.getGappedDots()}
                        {this.getMaxNumberOfPages()}
                        <li className="pagination__item">
                            <a onClick={() => this.nextPage()} className="pagination__link">
                                <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Arrow Right</title>
                                    <polygon id="Left-Iocn" stroke="none" fillRule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
        );
    }
}

const mapStateToProps = state => (
    {
        products: state.products,
        pagination: state.pagination
    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    { 
        nextPage,
        previousPage,
        goToPage
    }, 
    dispatch
);

export const Pagination = connect(mapStateToProps, matchDispatchToProps)(PaginationContainer);