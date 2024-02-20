import * as Cart from './Cart';
import products from '../../mocks/data/products.json';

describe('Cart', () => {
    beforeEach(() => {
        Cart.clear();
    });

    describe('add()', () => {
        it('should add a new product with quantity set to 1', () => {
            expect( Cart.getItems() ).toHaveLength( 0 );
            Cart.add( products[0] );
            expect( Cart.getItems() ).toHaveLength( 1 );
        });
        
        it('should increase the quantity of a product which already exists in the cart', () => {
            expect( Cart.getItems() ).toHaveLength( 0 );
            
            Cart.add( products[0] );
            Cart.add( products[0] );
            
            expect( Cart.getItems() ).toHaveLength( 1 );
            expect( Cart.getItems()[0].quantity ).toEqual( 2 );
        });
    });
});