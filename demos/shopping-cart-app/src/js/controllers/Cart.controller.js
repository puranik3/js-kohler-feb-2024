import * as Cart from '../models/Cart.js';

const renderStaticHtml = container => {
    const isEmpty = Cart.isEmpty();
    
    container.innerHTML = `
        <div style="position: sticky; top: 0px;">
            <h2 class="py-3">
                My cart
                <button class="btn btn-danger btn-sm float-end my-1" id="clear-cart">Clear</button>
            </h2>
            ${isEmpty ? `
                <div class="alert alert-primary text-center p-2" role="alert" id="cart-empty-message">
                    <strong>Cart is empty</strong>
                </div>
            ` : `
                <hr />
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
                </table>
            `}
        </div>
    `;

    return {
        cartItemEl: container.querySelector( '#cart-items' )
    };
};

export const render = container => {
    const { cartItemsEl } = renderStaticHtml( container );

};