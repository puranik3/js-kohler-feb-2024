// Unless YOU call a function, you will not get the returned value
// You have 2 functions - sum, f
function sum( x, y ) { 

    setTimeout(
        function() { // f
            return x + y;
        },
        3000
    );

}

const result = sum( 12, 13 );
console.log( 'result = ', result );
// EQ: []

// After 3 seconds
// EQ: [ f ]
// Dequeue f
// EQ: []
// f() -> By Node / browser
