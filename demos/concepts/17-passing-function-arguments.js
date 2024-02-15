function announce( priority, person ) {
    priority--;
    person.topic = 'Not selected';
    console.log( `${person.name}, you are #${priority} in the queue` );
}

let pr = 10; // primitive value
let john = { // pr is passed by value
    name: 'John',
    topic: 'CC payment overdue'
}

announce( pr, john );

console.log( `pr = ${pr}` );
console.log( 'john = ', john );