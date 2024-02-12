const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
    }
};

john.celebrateBirthday();
console.log( john );

const jane = {
    name: 'Jane',
    age: 28,
};

john.celebrateBirthday.call( john );
console.log( john );

john.celebrateBirthday.call( jane );
console.log( jane );