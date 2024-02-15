let x = 1; // global variable

function foo() {
    let y = 2; // local to the function

    // local variable - limited to use within the function foo
    const john = {
        name: 'John',
        age: 32
    };

    function bar( nameOfCaller ) {
        let p = 100;
        console.log( 'bar is called by ' + nameOfCaller );
        console.log( 'in bar scope y = ', y );
    }

    console.log( 'john = ', john );
    bar( 'foo' ); // works
    // console.log( 'in foo scope p = ', p ); // error
}

foo();
// console.log( 'in global scope john = ', john ); // error
// bar( 'global' ); // error
