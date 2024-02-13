// setTimeout() requests the browser to call the function after the given delay
// Hey browser/node! Call this function after 3 seconds
// setTimeout is a non-blocking function. It tells the browser what to do, and completes execution.
setTimeout(
    function() { // we don't call this function. Browser/node will call it after the delay.
        console.log( 'Hello, async' );
    },
    3000 // 3000 milliseconds -> 3 seconds
);

console.log( 'end of script' );