function sum( x, y, callback ) {
    setTimeout(
        function() {
            callback( x + y );
        },
        3000
    );
}

sum( 12, 13, function( result1 ) {
    console.log( 'result1 = ', result1 );

    // Use sum() to find the sum of result1 and 14, and log it
    sum( result1, 14, function( result2 ) {
        console.log( 'result2 = ', result2 );

        // Use sum() to find the sum of result2 and 15, and log it
        sum( result2, 15, function( result3 ) {
            console.log( 'result3 = ', result3 );
        });
    });
});