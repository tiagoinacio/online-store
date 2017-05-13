import React from 'react';
import { render } from 'react-dom';

import configuration from './config.json';

import { Header } from './header';
import { ProductPage } from './product-page';
import { Footer } from './footer';
import { Store } from './store';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title={configuration.pageTitle} cart={Store.cart} wishlist={Store.wishlist}/>
                <ProductPage />
                <Footer />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);