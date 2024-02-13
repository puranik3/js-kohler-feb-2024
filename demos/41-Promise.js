// ES2015 introduced the Promise class
function sum( x, y ) {
    return new Promise(
        function( resolve, reject ) { // f
            // console.log( 'inside f' );
            // console.log( resolve, reject );

            setTimeout(
                function() {
                    resolve( x + y );
                    // callback( x + y );
                },
                3000
            );
        }
    );
}

// there are 2 important methods of promises - then(), catch()
sum( 12, 13 )
    .then(function( result1 ) {
        console.log( 'result1 = ', result1 );

        return sum( result1, 14 );
    })
    .then(function( result2 ) {
        console.log( 'result2 = ', result2 );

        return sum( result2, 15 );
    })
    .then(function( result3 ) {
        console.log( 'result3 = ', result3 );
    });