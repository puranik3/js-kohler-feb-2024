let x = 1; // global variable

function foo() {
    let y = 2; // local to the function
    console.log( 'x = ', x );
    console.log( 'inside foo y = ', y );

    if( true ) {
        let z = 3;
        console.log( 'z = ', z );
    }

    // console.log( 'outside the block z = ', z ); // error
}

if( true ) {
    console.log( 'x = ', x );
}

foo();
// console.log( 'in global scope y = ', y ); // error