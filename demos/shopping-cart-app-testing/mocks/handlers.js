import { rest } from 'msw';
import Config from '../config';
import products from './data/products.json';

const { baseUrl } = Config;
const productsUrl = `${baseUrl}/products.json`

export const handlers = [
    rest.get( productsUrl, ( req, res, ctx ) => {
        return res(
            ctx.json( products )
        );
    }),
    // rest.get( ordersUrl, ( req, res, ctx ) => {
    //     return res(
    //         ctx.json( products )
    //     );
    // }),
    // ...
];

// configure failure responses
export const errorHandlers = [
    rest.get( productsUrl, ( req, res, ctx ) => {
        return res(
            ctx.status( 500 )
        );
    })
];