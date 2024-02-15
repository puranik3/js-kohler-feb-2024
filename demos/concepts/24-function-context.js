// execute this script in the browser
console.log( this ); // global object of the environment (node/browser) - window in browser

function foo() {
    console.log( this ); // window
}

foo();