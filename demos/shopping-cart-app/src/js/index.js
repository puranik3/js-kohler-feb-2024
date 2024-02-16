const renderStaticHtml = ( root ) => {
    root.innerHTML = `<div class="container">
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
    </div>`;

    // const productsWrapper = root.querySelector( 'main > div > section:first-child' )
    const productsWrapper = root.querySelector( '#products-wrapper' );
    const cartWrapper = root.querySelector( '#cart-wrapper' );

    return {
        // productsWrapper: productsWrapper,
        // cartWrapper: cartWrapper
        productsWrapper,
        cartWrapper
    };

};

const render = ( root ) => {
    const { // destructuring to get convenient variables from the returned object
        productsWrapper,
        cartWrapper
    } = renderStaticHtml( root );

    console.log( productsWrapper );
    console.log( cartWrapper );
};

// multiple ways to select elements
// root holds the DOM node for the root div on the HTML page
const root = document.getElementById( 'root' );
// document.querySelector( '#root' );

// document.querySelectorAll( '.x' ); // select multiple elements by class - gives an array of elements
render( root );