// var - don't use this keyword
// var price;

// if( true ) {
    // var price = 100; // does not have block scope
// }

// console.log( price );

if( true ) {
    let price = 100;
    console.log( 'in local scope, price = ', price );
}

// throws an error and stops execution of the script
console.log( 'in global scope, price = ', price );

// does not xecute
console.log( 'end of script' );