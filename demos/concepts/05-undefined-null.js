let x;

console.log( x ); // undefined - a special value

console.log( typeof x ); // "undefined"

if( x === undefined ) {
    console.log( 'x has not been assigned a value' );
} else {
    console.log( 'x is assigned a value = ', x );
}

console.clear();

let john = null; // null is used as a placeholder value for variable that shall later refer to an object
console.log( typeof null ); // "object" although its data type is actually null

john = 123;
console.log( john );