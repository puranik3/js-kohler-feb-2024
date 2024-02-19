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

// spread operator (...) can be used to create a copy of an array
export const getItems = () => [ ...cartItems ];

export const getTotal = () => {
    let total = 0;
    
    cartItems.forEach( cartItem => {
        total += cartItem.getTotal();
    });
    
    return total;
};

export const isEmpty = () => {
    return cartItems.length === 0;
};

export const show = () => {
    console.log( 'Cart : ', cartItems );
};