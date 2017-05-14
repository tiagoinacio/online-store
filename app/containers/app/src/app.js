import React            from 'react';

import './app.css';

import { Header }       from '../../header';
import { ProductsList } from '../../products-list';
import { Pagination }   from '../../pagination';
import { Footer }       from '../../../components/footer';
import configuration    from '../../../config.json';

export class App extends React.Component {
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
