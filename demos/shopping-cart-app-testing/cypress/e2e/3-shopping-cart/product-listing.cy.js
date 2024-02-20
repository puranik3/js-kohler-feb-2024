import products from '../../fixtures/products.json';

describe('', () => {
    beforeEach(() => {
        cy.intercept( 'GET', '/data/products.json', { fixture: 'products.json' } );
        cy.visit( 'http://127.0.0.1:3000/' );
    });

    it('shows the list of product fetched from the backend', () => {
        cy.get( '#products-list .card' ).should( 'have.length', 20 );

        cy.get( '#products-list .card-title' ).each(( card, idx ) => {
            cy.wrap( card ).should( 'have.text', products[idx].Name );
        });

        cy.get( '#products-list .btn-add-to-cart' ).should( 'have.length', 20 );
    });

    // it('', () => {

    // });

    // it('', () => {

    // });
});