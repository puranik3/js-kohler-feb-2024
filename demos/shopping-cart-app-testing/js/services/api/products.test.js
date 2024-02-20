import { getProducts } from './products';
import products from '../../../mocks/data/products.json';

describe('getProducts()', () => {
    it('should return the products data received from the backend', async () => {
        const responseData = await getProducts();

        expect( responseData ).toEqual( products );
    });
})