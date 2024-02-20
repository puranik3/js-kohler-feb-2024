import Product from './Product.js';

const _products = [];

export const setProducts = products => {
    _products.length = 0;
    _products.push( ...products.map( product => new Product( product ) ) );
};

export const getProducts = () => [ ..._products ];