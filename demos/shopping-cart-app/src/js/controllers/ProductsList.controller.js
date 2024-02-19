import { getProducts } from '../services/api/products.service.js';
import { formatPrice } from '../services/utils.js';
import * as Cart from '../models/Cart.js';
import * as CartCtrl from './Cart.controller.js';

const renderStaticHtml = ( container ) => {
    container.innerHTML = `
        <h2 class="visually-hidden">List of products</h2>
        <div class="row" id="products-list"></div>
    `;

    const productsListEl = container.querySelector( '#products-list' );

    return {
        productsListEl
    };
};

const bindListeners = ( productEl, product ) => {
    productEl.querySelector( '.btn-add-to-cart' ).addEventListener( 'click', function() {
        // alert( 'button is clicked' );
        Cart.add( product );
        // Cart.show();
        CartCtrl.render( document.getElementById( 'cart-wrapper' ) );
    });
}

const renderItem = ( container, product ) => {
    const productEl = document.createElement( 'div' );
    productEl.className = "col-12 col-md-6 col-lg-4 my-2 d-flex";

    productEl.innerHTML = `
        <div class="card w-100">
            <img src="${product['Thumbnail URL']}" class="card-img-top" alt="${product.Name}">
            <div class="card-body">
                <h3 class="card-title fs-5">${product.Name}</h3>
                <p class="card-text">${product.Description}</p>
                <p>Price: <span class="fw-bold">$${formatPrice(product['Retail Price'])}</span></p>
                <a href="#" class="btn btn-primary btn-sm btn-add-to-cart">Add to cart</a>
            </div>
        </div>
    `;

    container.appendChild( productEl );
    bindListeners( productEl, product );
}

// arrow function does not require () around a single argument
export const render = async container => {
    try {
        // cal getProducts()
        const products = await getProducts();

        const { productsListEl } = renderStaticHtml( container );
        products.forEach( product => renderItem( productsListEl, product ) );
    } catch( error ) {
        alert( error.message );
    }
};

// other export syntaxes you will see in your code...
// export default render;

// export {
//     render
// }