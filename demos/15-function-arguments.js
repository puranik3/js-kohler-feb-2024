function foo( x, y, z ) {
    if( x !== undefined && y !== undefined && z !== undefined ) {
        return x * x + y * y + z * z;
    } else if( x !== undefined && y !== undefined && z === undefined ) {
        return x * x + y * y;
    }
}

console.log( foo( 12, 13, 14 ) );
console.log( foo( 12, 13 ) ); // function can be called with fewer arguments
console.log( foo( 12, 13, 14, 15 ) ); // works - function can be called with more arguments than it expects