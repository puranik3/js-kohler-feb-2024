import CartItem from './CartItem.js';

const _cartItems = [];

export const add = product => {
    let match = _cartItems.find( cartItem => cartItem.product['SKU'] === product['SKU'] );
    
    if( match ) {
        match.quantity++;
    } else {
        _cartItems.push( new CartItem( product, 1 ) );
    }
};

export const clear = () => {
    _cartItems.length = 0;
};

export const getItems = () => [ ..._cartItems ];

export const getTotal = () => _cartItems.reduce( ( acc, cartItem ) => acc + cartItem.getTotal(), 0 );

export const isEmpty = () => _cartItems.length === 0;

export const remove = product => {
    const idx = _cartItems.findIndex( cartItem => cartItem.product === product );
    _cartItems.splice( idx, 1 );
};