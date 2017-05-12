import React from 'react';
import ReactDom from 'react-dom';

import './app.css';

import { Header } from './header';
import { ProductList } from './product-list';
import { Pagination } from './pagination'
import { Footer } from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="product-page">
                    <div className="container">
                        <ProductList />
                        <Pagination />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);