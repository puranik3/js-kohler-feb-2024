// when we use [], we create an array in memory
// items can be of different data types
// const days = [
//     'Monday',
//     123
// ]; 

const days = [
    'Monday',
    'Tuesday',
    'Wednesday'
];

console.log( days );
console.log( days[0] ); // "Monday"
console.log( days[2] ); // "Wednesday"
console.log( days[3] ); // undefined

// console.log( days[-1] );

days[2] = 'Wed';
days[3] = 'Thursday'; // works
days[6] = 'Sunday'; // works

console.log( days );

console.log( days.length ); // how many items??? (last index + 1)

days[days.length] = 'Earthday';
days.push( 'MercuryDay' );
days.unshift( 'Ravivar' );

console.log( days );

if( days.length === 7 ) {
    console.log( '✔️ All good - days has expected number of items ')
} else {
    throw new Error( '𐄂 Test failed: days has unexpected number of items. Expected 7, found ' + days.length );
}