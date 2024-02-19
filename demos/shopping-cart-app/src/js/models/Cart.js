// default export when imported are not enclosed in {}
import CartItem from './CartItem.js';

const cartItems = [
    // {
    //     product: {
    //         Name: '',

    //     },
    //     quantity: 3
    // },
    // {

    // }
];

export const add = product => {
    const match = cartItems.find(
        cartItem => cartItem.product.SKU === product.SKU
    );

    // if( match !== null )
    if( match ) {
        match.quantity++;
    } else {
        cartItems.push( new CartItem( product, 1 ) );
    }
};

export const isEmpty = () => {
    return cartItems.length === 0;
};

export const show = () => {
    console.log( 'Cart : ', cartItems );
};