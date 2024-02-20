import CartItem from './CartItem';
import products from '../../mocks/data/products.json';

describe('CartItem', () => {
    let item;

    beforeEach(() => {
        // arranging and acting
        item = new CartItem( products[0], 2 );
    });

    test('constructor creates an object with product and quantity that are passed', () => {
        // assertions
        expect( item ).toEqual({
            product: products[0],
            quantity: 2
        });
    });
    
    test('getTotal() returns the correct total for an item', () => {
        expect( item.getTotal() ).toEqual( products[0]['Retail Price'] * 2 );
    });
});