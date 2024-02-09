// primitive values follow "copy-by-value" assignment
let x = 1; // number (a primitive value)
let y = x; // copy by value
y++; // does not affect x

console.log( `x = ${x} | y = ${y}` );

// non-primitive values follow "copy-by-reference" assignment
let arrX = [ 1, 2, 3 ]; // array (a non-primitive value)
let arrY = arrX; // copy by reference
arrY.push( 4 );

console.log( `arrX = ${arrX} | arrY = ${arrY}` );