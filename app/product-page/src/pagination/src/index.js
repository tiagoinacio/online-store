import React from 'react';

export class Pagination extends React.Component {
    render() {
        return (
            <nav className="pagination">
                    <ul className="pagination__list">
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Arrow Left</title>
                                    <polygon id="Left-Icon" stroke="none" fillRule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                                </svg>
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                1
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                2
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                3
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                ...
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
                                10
                            </a>
                        </li>
                        <li className="pagination__item">
                            <a href="#" className="pagination__link">
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