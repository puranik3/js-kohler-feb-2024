const john = {
    name: 'John',
    age: 32,
    celebrateBirthday( years ) {
        this.age += years;
    }
};

john.celebrateBirthday( 2 );
console.log( john );

const jane = {
    name: 'Jane',
    age: 28,
};

john.celebrateBirthday.call( john, 2 );
console.log( john );

john.celebrateBirthday.call( jane, 10 );
console.log( jane );