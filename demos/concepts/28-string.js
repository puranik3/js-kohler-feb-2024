// length
console.log( 'Hello'.length );

// concatenation - using `Hello ${place}` -> 'Hello world'; '+' can also be used

const str = 'Hello, World';
const strLC = str.toLowerCase();

console.log( str, strLC );

let greeting = 'Good Morning';
greeting = greeting.toUpperCase();
console.log( greeting );

// replace()

let email = '    john@gmail.com    ';
console.log( email );
email = email.trim();
console.log( email );

console.clear();

let empNo = 'KH123456';
console.log( empNo[0] ); // 'K'
const empNoNumberPart = empNo.substring( 2 );
console.log( empNoNumberPart );
const empNoCompanyPart = empNo.substring( 0, 2 );
console.log( empNoCompanyPart );

console.log( empNo.includes( 'KH' ) ); // true
console.log( empNo.includes( 'IN' ) ); // false

// indexOf
console.log( empNo.indexOf( 'KH' ) ); // starts at index 0
console.log( empNo.indexOf( '1234' ) ); // starts at index 2
console.log( empNo.indexOf( '5678' ) ); // -1 (substring is not present)

let count = 0;
// count number of uppercase
for( let i = 0; i < str.length; ++i ) {
    if( str[i] >= 'A' && str[i] <= 'Z' ) {
        ++count;
    }
}

console.log( 'count of uppercase letters = ', count );
