import { ProductsReducer } from '../src/products';
import products from '../../../api/products.json';

describe('ProductsReducer', () => {
    it('should return the products', () => {
        expect(ProductsReducer()).toEqual(products);
    });
});