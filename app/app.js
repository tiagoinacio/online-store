import React from 'react';
import ReactDom from 'react-dom';

import './app.css';

import { Header } from './header';
import { ProductPage } from './product-page';
import { Footer } from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ProductPage />
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);