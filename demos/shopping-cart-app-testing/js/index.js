import * as ProductsListCtrl from './controllers/ProductsList.controller.js';
import * as CartCtrl from './controllers/Cart.controller.js';

const _renderStaticHtml = container => {
    container.innerHTML = `
        <div class="container">
            <header class="my-4">
                <h1 class="my-1">
                    Mantra
                </h1>
                <small class="text-sm">Fashion Mart</small>
            </header>
            <hr />
            <main>
                <div class="row" style="height: calc( 100vh - 164px ); overflow: auto;">
                    <section class="col-12 col-md-8 my-3 order-2 order-md-1" id="products-wrapper"></section>
                    <section class="col-12 col-md-4 order-1 order-md-2" id="cart-wrapper"></section>
                </div>
            </main>
        </div>
    `;

    return {
        productsWrapper: container.querySelector( '#products-wrapper' ),
        cartWrapper: container.querySelector( '#cart-wrapper' ),
    };
}

let _containerEl = null;

export const render = container => {
    _containerEl = _containerEl || container;
    const { productsWrapper, cartWrapper } = _renderStaticHtml( _containerEl );
    
    ProductsListCtrl.render( productsWrapper );
    CartCtrl.render( cartWrapper );
};

const root = document.getElementById( 'root' );
render( root );