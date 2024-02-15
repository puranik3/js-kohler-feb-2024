class Person {
    constructor( name, age ) {
        console.log( this );
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32 ); // { name: 'John', age: 32 }
const jane = new Person( 'Jane', 28 );

john.celebrateBirthday();
console.log( john, jane );

// const john = {
//     name: 'John',
//     age: 32,
//     celebrateBirthday() {
//         this.age++;
//     }
// }

// const jane = {
//     name: 'Jane',
//     age: 28,
//     celebrateBirthday() {
//         this.age++;
//     }
// }