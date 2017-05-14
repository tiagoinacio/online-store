import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import SVGInline from 'react-svg-inline';
import arrowLeftIcon from '../../../assets/svg/arrow-left.svg';
import arrowRightIcon from '../../../assets/svg/arrow-right.svg';
import './pagination.scss';

import configuration from '../../../config.json';
import { nextPage, previousPage, goToPage } from '../../../actions';
import { PaginationItem } from '../../../components/pagination-item';

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

    getListOfNumberedPages(maxNumberOfPages) {
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

    getLastPageClassName(maxNumberOfPages) {
        if (this.props.pagination.currentPage === maxNumberOfPages) {
            return 'pagination__link pagination__link--selected';
        }
        return 'pagination__link';
    }

    getGappedDots(maxNumberOfPages) {
        if (this.props.pagination.currentPage < (maxNumberOfPages - 3)) {
            return <PaginationItem isDisabled={true} label='...'/>;
        }
    }

    getLastPageNumber(maxNumberOfPages) {
        return (
            <li className="pagination__item">
                <a onClick={() => this.props.goToPage(maxNumberOfPages)} className={this.getLastPageClassName(maxNumberOfPages)}>
                {maxNumberOfPages}
                </a>
            </li>
        );
    }

    render() {
        const maxNumberOfPages = this.getMaxNumberOfPages();

        return (
            <nav className="pagination">
                    <ul className="pagination__list">
                        <PaginationItem svg={arrowLeftIcon} onItemClick={this.previousPage.bind(this)}/>
                        {this.getListOfNumberedPages(maxNumberOfPages)}
                        {this.getGappedDots(maxNumberOfPages)}
                        {this.getLastPageNumber(maxNumberOfPages)}
                        <PaginationItem svg={arrowRightIcon} onItemClick={this.nextPage.bind(this)}/>
                    </ul>
                </nav>
        );
    }
}

PaginationContainer.propTypes = {
    products: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired
};

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
