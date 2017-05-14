import React from 'react';

import './footer.scss';

/**
 * Footer Component
 * @name Footer
 * @function
 *
 * @extends {React.Component}
 */
export class Footer extends React.Component {
    /**
     * Renders the footer component
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <footer className="container">
                <p className="footer__sidenote">Footer</p>
            </footer>
        );
    }
}
