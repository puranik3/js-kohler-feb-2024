const numbers = [ 2, 3, 5, 7 ];

// push(), unshift(), splice()

// .length -> numbers.length

// remove - pop(), shift(), splice()
const last = numbers.pop(); // removes and returns the last item
console.log( last ); // 7
console.log( numbers ); // [ 2, 3, 5 ]

// replace items - splice()
const primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ];
const removed = primes.splice( 3, 2 );
console.log( removed ); // [ 7, 11 ]
console.log( primes ); // [ 2, 3, 5, 13, 17, 19, 23 ]
primes.splice( 3, 0, 7, 11 );
console.log( primes );

// reverse()

console.clear();

// sort()
const names = [
    'John',
    'Jane',
    'April',
    'May',
    'June'
];

names.sort();
console.log( names );

const prices = [ 40, 20, 35, 40, 90, 100, 25, 65, 50, 45 ];
// we want to sort in ascending order
prices.sort(function( x, y ) {
    if( x < y ) {
        return -1; // return -1 when the first argument pased (x) should come before the second argument in the sorted order
    }

    if( y < x ) {
        return 1;
    }

    return 0; // x can come before y, or y can come before x - we don't care
});
console.log( prices );

// includes()