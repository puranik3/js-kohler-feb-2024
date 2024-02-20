import CartItem from './CartItem';
import products from '../../mocks/data/products.json';

test('CartItem constructor creates an object with product and quantity that are passed', () => {
    // arranging and acting
    const item = new CartItem( products[0], 2 );

    // assertions
    expect( item ).toEqual({
        product: products[0],
        quantity: 2
    });
});