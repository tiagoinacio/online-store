import React from 'react';

export class ProductList extends React.Component {
    render() {
        return (
            <ul className="product-list">
                <li className="product-list__item">
                    <article className="product" itemScope itemType="http://schema.org/Product">
                        <figure className="product__image-wrapper">
                            <img className="product__image" src={require("../../assets/images/img01.png")} alt="Product" itemProp="image" />
                            <button className="product__wishlist-button button button--round button--wishlist">
                                <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Wishlist Icon</title>
                                    <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                                </svg>
                            </button>
                        </figure>
                        <div className="product__details">
                            <h1 className="product__title" itemProp="brand">Product Title</h1>
                            <p className="product__subtitle" itemProp="description">Product Subtitle</p>
                            <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                <span className="product__price--strike">£210</span><span className="product__price--discounted" itemProp="price">£210</span>
                            </div>
                            <button className="product__add-to-cart button button--primary">Add to Cart</button>
                        </div>
                    </article>
                </li>

                <li className="product-list__item">
                    <article className="product" itemScope itemType="http://schema.org/Product">
                        <figure className="product__image-wrapper">
                            <img className="product__image" src={require("../../assets/images/img01.png")} alt="Product" itemProp="image" />
                            <button className="product__wishlist-button button button--round button--wishlist">
                                <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Wishlist Icon</title>
                                    <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                                </svg>
                            </button>
                        </figure>
                        <div className="product__details">
                            <h1 className="product__title" itemProp="brand">Product Title</h1>
                            <p className="product__subtitle" itemProp="description">Product Subtitle</p>
                            <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                <span className="product__price" itemProp="price">£210</span>
                            </div>
                            <button className="product__add-to-cart button button--primary button--in-cart">In Cart</button>
                        </div>
                    </article>
                </li >
            </ul >
        );
    }
}