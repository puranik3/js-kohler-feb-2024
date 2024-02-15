// Event queue: A queue of function waiting to execute
// Event queue: []

setTimeout(
    function() { // f1
        console.log( 1 );
    },
    0
);

// Event queue: [ f1 ]

console.log( 2 );

// Deque f1 and f1();
// Event queue: []