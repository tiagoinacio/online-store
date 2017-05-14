import React            from 'react';

import './app.scss';

import { Header }       from '../../header';
import { ProductsList } from '../../products-list';
import { Pagination }   from '../../pagination';
import { Footer }       from '../../../components/footer';
import configuration    from '../../../config.json';

/**
 * App Class that renders all the components of the application
 * @name App
 * @function
 *
 * @extends {React}
 */
export class App extends React.Component {

    /**
     * Renders all the application components
     *
     * @name render
     * @function
     * @returns {ReactElement} markup
     */
    render() {
        return (
            <div>
                <Header title={configuration.pageTitle}/>
                <main className="product-page">
                    <div className="container">
                        <ProductsList />
                        <Pagination />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
