import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import arrowLeftIcon from '../../../assets/svg/arrow-left.svg';
import arrowRightIcon from '../../../assets/svg/arrow-right.svg';
import './pagination.scss';

import configuration from '../../../config.json';
import { nextPage, previousPage, goToPage } from '../../../actions';
import { PaginationItem } from '../../../components/pagination-item';

/**
 * Handles the products pagination
 * @name PaginationContainer
 * @function
 *
 * @extends {React.Component}
 */
class PaginationContainer extends React.Component {

    /**
     * get the maximum number of pages,
     * based on the number of products and the number of products to be displayed per page
     *
     * @name getMaxNumberOfPages
     * @function
     * @param {Number} numberOfProducts number of products
     * @param {Number} productsPerPage displayed products per page
     * @returns {Number} the last page for the pagination
     */
    getMaxNumberOfPages(numberOfProducts, productsPerPage) {
        return numberOfProducts / productsPerPage;
    }

    /**
     * calls the previousPage callback, if the selected page is not the first one
     *
     * @name previousPage
     * @function
     */
    previousPage(selectedPage, previousPageCb) {
        if (selectedPage > 1) {
            previousPageCb();
        }
    }

    /**
     * calls the nextPage callback, if the selected page is not the last one
     *
     * @name nextPage
     * @function
     */
    nextPage(selectedPage, maxNumberOfPages, nextPageCb) {
        if (selectedPage < maxNumberOfPages) {
            nextPageCb();
        }
    }

    /**
     * find the difference between the selected page and the last page,
     * if it is bigger than the threshold (5 numbers in the pagination component minus the selected one = 4),
     * that means that the first page on the pagination slider is the selected one,
     * if not,
     * that means that we do not have enough pages to populate the 5 slots in the pagination,
     * and we need to add the previous ones
     *
     * @name getMinimumValueForPagination
     * @function
     * @returns {Number} the first page to be displayed in the pagination component
     */
    getMinimumValueForPagination(maxNumberOfPages, selectedPage) {
        const threshold = 4;
        const diffToLast = maxNumberOfPages - selectedPage;

        return diffToLast > threshold ? selectedPage : maxNumberOfPages - threshold;
    }

    /**
     * Filter all candidate pages by a minimum and maximum range
     *
     * @name filterVisiblePagesInPagination
     * @function
     * @param {Number} currentPage current page to be processed
     * @param {Number} selectedPage selected page
     * @param {Number} maxNumberOfPages maximum number of pages in the pagination
     * @returns {bool} true if the page is in bounds, false if the page is not to be shown in the pagination
     */
    filterVisiblePagesInPagination(currentPage, selectedPage, maxNumberOfPages) {
        const maxValue = selectedPage + 3;
        const minValue = this.getMinimumValueForPagination(maxNumberOfPages, selectedPage);

        if (currentPage >= minValue && currentPage < maxValue && currentPage !== 0) {
            return true;
        }
        return false;
    }

    /**
     * Generates the markup for the list of pages in the pagination
     *
     * @name getListOfNumberedPages
     * @function
     * @param {Number} maxNumberOfPages max number of pages
     * @param {Number} selectedPage selected page
     * @param {function} goToPageCb callback function to be called when clicking on a pagination item
     * @returns {ReactElement} markup
     */
    getListOfNumberedPages(maxNumberOfPages, selectedPage, goToPageCb) {
        // creates array with possible candidates for the pagination items [0 ... maxNumberOfPages]
        const listOfCandidatePages = Array.from(Array(maxNumberOfPages).keys());

        // remove the index 0 because it is not a valid page
        listOfCandidatePages.shift();

        // filters the candidates based on a range
        return listOfCandidatePages
            .filter((currentPage) =>
                this.filterVisiblePagesInPagination(currentPage, selectedPage, maxNumberOfPages))
            .map((index) => {
                const isActive = selectedPage === index;
                const label = String(index);

                return (
                    <PaginationItem
                        key={index}
                        onItemClick={() => goToPageCb(index)}
                        isActive={isActive}
                        label={label}
                    />
                );
            });
    }

    /**
     * if we have a gap between the selected page and the last page bigger than 3,
     * we should show a 3 dots in between
     *
     * @name getGappedDots
     * @function
     * @param {Number} selectedPage selected page
     * @param {Number} maxNumberOfPages max number of pages
     * @returns {ReactElement} markup
     */
    getGappedDots(selectedPage, maxNumberOfPages) {
        if (selectedPage < (maxNumberOfPages - 3)) {
            return <PaginationItem isDisabled={true} label='...'/>;
        }
    }

    /**
     * Renders all the pagination components
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        const maxNumberOfPages = this.getMaxNumberOfPages(this.props.products.length, configuration.productsPerPage);

        return (
            <nav className="pagination">
                    <ul className="pagination__list">
                        <PaginationItem
                            svg={arrowLeftIcon}
                            onItemClick={() => this.previousPage(
                                this.props.pagination.selectedPage,
                                this.props.previousPage
                            )}/>
                        {this.getListOfNumberedPages(
                            maxNumberOfPages,
                            this.props.pagination.selectedPage,
                            this.props.goToPage
                        )}
                        {this.getGappedDots(this.props.pagination.selectedPage, maxNumberOfPages)}
                        <PaginationItem
                            label={String(maxNumberOfPages)}
                            isActive={this.props.pagination.selectedPage === maxNumberOfPages}
                            onItemClick={() => this.props.goToPage(maxNumberOfPages)}
                        />
                        <PaginationItem
                            svg={arrowRightIcon}
                            onItemClick={() => this.nextPage(
                                this.props.pagination.selectedPage,
                                maxNumberOfPages,
                                this.props.nextPage
                            )}/>
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
        pagination: state.pagination
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
        nextPage,
        previousPage,
        goToPage
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
 * @returns {function} Pagination Component
 */
export const Pagination = connect(mapStateToProps, matchDispatchToProps)(PaginationContainer);
