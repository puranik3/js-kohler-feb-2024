console.log( sum1( 12, 13 ) ); // works!

// function declaration syntax (created before even this script executes)
function sum1( x, y ) {
    const result = x + y;
    // return; // returns undefined
    return result;
}

console.log( sum2( 12, 13 ) );

// function expression syntax (created when the code actually runs)
const sum2 = function( x, y ) {
    const result = x + y;
    return result;
};