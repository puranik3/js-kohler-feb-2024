/**
 * Function are first-class citizens in JS
 * You can do with function WHATEVER you can do with objects
 */

const john = {
    name: 'John',
    age: 32
};

const jonathan = john; // allowed - we can assign objects - both refer to the same object in memory

function sum( x, y ) {
    return x + y;
}

const add = sum; // you can assign functions - add and sum refer to the same function in memory

console.log( sum( 12, 13 ) );
console.log( add( 12, 13 ) );