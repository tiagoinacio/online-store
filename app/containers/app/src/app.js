import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header } from '../../header';
import { ProductsList } from '../../products-list';
import { Pagination } from '../../pagination';
import { Footer } from '../../../components/footer';
import configuration from '../../../config.json';


import './app.css';

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