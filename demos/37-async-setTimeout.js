// EQ: []
setTimeout(
    function() {  // f1
        console.log( 1 );

        setTimeout(
            function() { // f2
                console.log( 4 );
            },
            0
        );
    },
    0
);
// EQ: [ f1 ]

console.log( 2 );

setTimeout(
    function() { // f3
        console.log( 3 );
    },
    0
);

// EQ: [ f1, f3 ]

console.log( 5 );

// f1 will be dequeued
// EQ: [ f3 ];
// f1 is executed - f1()
// EQ: [ f3, f2 ];

// f3 will be dequeued
// EQ: [ f2 ]
// f3 is executed - f3()

// f2 will be dequeued
// EQ: []
// f2()

// Output: 2 5 1 3 4