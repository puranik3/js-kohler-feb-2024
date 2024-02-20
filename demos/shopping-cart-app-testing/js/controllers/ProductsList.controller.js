import * as CartCtrl from './Cart.controller.js';
import * as Cart from '../models/Cart.js'
import * as ProductsList from '../models/ProductsList.js';
import { getProducts } from '../services/api/products.js';
import { roundPrice } from '../services/utils.js';

const _renderStaticHtml = container => {
    container.innerHTML = `
        <h2 class="visually-hidden">List of products</h2>
        <div class="row" id="products-list"></div>
    `;

    return {
        productsListEl: container.querySelector( '#products-list' )
    };
};

const _bindListeners = ( productEl, product ) => {
    productEl.querySelector( '.btn-add-to-cart' ).addEventListener( 'click', function() {
        Cart.add( product );
        CartCtrl.render();
    });
};

const _renderItem = ( container, product ) => {
    const productEl = document.createElement( 'div' );
    productEl.className = `col-12 col-md-6 col-lg-4 my-2 d-flex`;
    
    productEl.innerHTML = `
        <div class="card w-100">
            <img src="${product['Thumbnail URL']}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h3 class="card-title fs-5">${product['Name']}</h3>
                <p class="card-text">${product['Description']}</p>
                <p>Price: <span class="fw-bold">$${roundPrice( product['Retail Price'] )}</span></p>
                <a href="#" class="btn btn-primary btn-sm btn-add-to-cart">Add to cart</a>
            </div>
        </div>
    `;

    container.appendChild( productEl );
    
    _bindListeners( productEl, product );
};

let _containerEl = null;

export const render = async container => {
    _containerEl = container || _containerEl;

    const products = await getProducts();
    ProductsList.setProducts( products );

    const { productsListEl } = _renderStaticHtml( _containerEl );
    ProductsList.getProducts().forEach( product => _renderItem( productsListEl, product ) );
};