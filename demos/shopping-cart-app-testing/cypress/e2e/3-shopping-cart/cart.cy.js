import products from '../../fixtures/products.json';

describe('Cart', () => {
    beforeEach(() => {
        cy.intercept( 'GET', '/data/products.json', { fixture: 'products.json' } );
        cy.visit( 'http://127.0.0.1:3000' );
    });

    it('is initially empty', () => {
        cy.contains( 'Cart is empty' ).should( 'be.visible' );
    });

    it('adds a product to the cart when "Add to cart" of product listing is clicked', () => {
        cy.get( '#products-list .btn-add-to-cart' ).eq(0).click();
        cy.get( '#cart-table .cart-item-row' ).should( 'have.length', 1 );
        cy.get( '#cart-table .cart-total-row' ).should( 'have.length', 1 );

        cy.get( '#cart-table .cart-item-quantity' ).should( 'have.text', '1' );
        cy.get( '#cart-table .cart-item-price' ).should( 'have.text', products[0]['Retail Price'] );
        cy.get( '#cart-table .cart-item-total' ).should( 'have.text', products[0]['Retail Price'] );
        cy.get( '#cart-table .cart-total' ).should( 'have.text', products[0]['Retail Price'] );
    });
    
    it('increases the quantity of a product which exists in the cart when "Add to cart" of product listing is clicked', () => {
        cy.get( '#products-list .btn-add-to-cart' ).eq(0).click();
        cy.get( '#products-list .btn-add-to-cart' ).eq(0).click();

        cy.get( '#cart-table .cart-item-row' ).should( 'have.length', 1 );
        cy.get( '#cart-table .cart-total-row' ).should( 'have.length', 1 );

        cy.get( '#cart-table .cart-item-quantity' ).should( 'have.text', '2' );
        cy.get( '#cart-table .cart-item-price' ).should( 'have.text', products[0]['Retail Price'] );
        cy.get( '#cart-table .cart-item-total' ).should( 'have.text', products[0]['Retail Price'] * 2 );
        cy.get( '#cart-table .cart-total' ).should( 'have.text', products[0]['Retail Price'] * 2 );
    });

    it('adds multiple rows for multiple items in the  cart', () => {

    });

    it('clears the cart and shows the empty message, when "Clear" button is clicked', () => {
        
    } )
});
