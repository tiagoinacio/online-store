import React from 'react';

import { ProductList } from './product-list';
import { Pagination } from './pagination';

export class ProductPage extends React.Component {
    render() {
        return (
            <main className="product-page">
                <div className="container">
                    <ProductList />
                    <Pagination />
                </div>
            </main>
        );
    }
}