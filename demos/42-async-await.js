function sum( x, y ) {
    return new Promise(
        function( resolve, reject ) { // f
            setTimeout(
                function() {
                    if( typeof x !== 'number' || typeof y !== 'number' ) {
                        reject( new Error( 'one of the arguments was not a number' ) );
                        return;
                    }

                    resolve( x + y );
                },
                3000
            );
        }
    );
}

async function calculateSums() {
    try {
        const result1 = await sum( 12, 13 );
        console.log( 'result1 = ', result1 );
        const result2 = await sum( result1, 'hello' );
        console.log( 'result2 = ', result2 );
        const result3 = await sum( result2, 15 );
        console.log( 'result3 = ', result3 );
    } catch( error ) {
        console.log( error.message );
    }
}

calculateSums();