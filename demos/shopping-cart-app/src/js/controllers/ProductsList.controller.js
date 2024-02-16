import { getProducts } from '../services/api/products.service.js';

const renderStaticHtml = ( container ) => {
    container.innerHTML = 'Products List';
};

const renderItem = ( container, product ) => {
    container.innerHTML = product.Name;
}

// arrow function does not require () around a single argument
export const render = async container => {
    try {
        // cal getProducts()
        const products = await getProducts();

        renderStaticHtml( container );
        renderItem( container, products[0] );
    } catch( error ) {
        alert( error.message );
    }
};

// other export syntaxes you will see in your code...
// export default render;

// export {
//     render
// }