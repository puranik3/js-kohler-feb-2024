// arithmetic
// +, -, *, /, %

// increment/decrement
// ++, --

// assignment
// =, +=, -=, ...

let x = 0;
// x = x + 10;
x += 10;
console.log( x );

// comparison
// ==, !=, <, <=, >, >=, ===, !==
console.log( 1 == 1 ); // true
console.log( 1 === 1 ); // true

const y = '1';
console.log( 1 == y ); // true
console.log( 1 === "1" ); // false

// logical
// !, &&, ||

// conditional (?:)
const boxOfficeCollection = 200;
const isSuperhit = ( boxOfficeCollection >= 100 ? 'Yes' : 'No' );
console.log( isSuperhit );

// ?., ??