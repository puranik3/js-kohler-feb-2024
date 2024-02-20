import { roundPrice } from '../services/utils.js';
import * as Cart from '../models/Cart.js';

const _renderStaticHtml = container => {
    const isEmpty = Cart.isEmpty();

    container.innerHTML = `
        <div style="position: sticky; top: 0px;">
            <h2 class="py-3">
                My cart
                ${isEmpty ? `` : `<button class="btn btn-danger btn-sm float-end my-1" id="clear-cart">Clear</button>`}
            </h2>
            ${
                isEmpty ? (
                    `<div class="alert alert-primary text-center p-2" role="alert" id="cart-empty-message">
                        <strong>Cart is empty</strong>
                    </div>`
                ) : (
                    `<hr />
                    <table class="table" id="cart-table" style="font-size: 0.8em;">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th class="text-end">Qty</th>
                                <th class="text-end">Price ($)</th>
                                <th class="text-end">Total ($)</th>
                            </tr>
                        </thead>
                        <tbody id="cart-items"></tbody>
                    </table>`
                )
            }
        </div>
    `;

    return {
        cartItemsEl: container.querySelector( '#cart-items' ),
        btnClearCart: container.querySelector( '#clear-cart' )
    };
};

const _renderItem = ( container, cartItem ) => {
    container.innerHTML += `
        <tr class="cart-item-row">
            <td>${cartItem.product['Name']}</td>
            <td class="text-end font-monospace cart-item-quantity">${cartItem.quantity}</td>
            <td class="text-end font-monospace cart-item-price">${roundPrice( cartItem.product['Retail Price'] )}</td>
            <td class="text-end font-monospace cart-item-total">${roundPrice( cartItem.getTotal() )}</td>
        </tr>
    `;
};

const _renderTotal = container => {
    if( Cart.isEmpty() ) {
        return;
    }

    container.innerHTML += `
        <tr class="cart-total-row">
            <td></td>
            <td class="text-end"></td>
            <td class="text-end"></td>
            <td class="text-end font-monospace cart-total">${Cart.isEmpty() ? '' : roundPrice( Cart.getTotal() )}</td>
        </tr>
    `;
};


const _clear = () => {
    Cart.clear();
    render();
};

const _bindListeners = btnClearCart => {
    if( !btnClearCart ) {
        return;
    }

    // making sure not to add listener more than once
    btnClearCart.removeEventListener( 'click', _clear );
    btnClearCart.addEventListener( 'click', _clear );
};

let _containerEl = null;

export const render = container => {
    _containerEl = container || _containerEl;
    const { cartItemsEl, btnClearCart } = _renderStaticHtml( _containerEl );
    Cart.getItems().forEach( cartItem => _renderItem( cartItemsEl, cartItem ) );
    _renderTotal( cartItemsEl );
    
    _bindListeners( btnClearCart );
};