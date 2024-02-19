import Config from '../../../config.js';

export const getProducts = async () => {
    const response = await fetch( `${Config.baseUrl}/products.json` );
    
    if( !response.ok ) {
        throw new Error( response.statusText );
    }

    const products = await response.json();
    return products;
};
