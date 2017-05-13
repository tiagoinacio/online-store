import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './app.css';
import { Header } from '../../header';
import { ProductsList } from '../../products-list';
import { Pagination } from '../../pagination';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="product-page">
                    <div className="container">
                        <ProductsList />
                        <Pagination />
                    </div>
                </main>
            </div>
        );
    }
}