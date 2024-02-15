function sum( x, y, callback ) { 

    setTimeout(
        function() { // f
            // return x + y;
            callback( x + y );
        },
        3000
    );

    // callback( x + y );
    // return x + y;
}

sum( 12, 13, function( result ) { // callback
    console.log( 'result = ', result );

    // and do something more with result if you need...
    // code...
} );
