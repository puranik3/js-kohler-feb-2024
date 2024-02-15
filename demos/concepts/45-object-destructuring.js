const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@kohler.com',
        'john@gmail.com'
    ],
    address: {
        city: 'Noida',
        pinCode: 110011
    },
    dependents: [
        {
            name: 'Jack',
            age: 7,
        },
        {
            name: 'Jill',
            age: 5
        }
    ]
};

// const yearsOld = john.age, city = john.address.city, pinCode = john.address.pinCode, first = john.dependents[0].name, second = john.dependents[1].name;
const {
    age : yearsOld,
    address: {
        city,
        pinCode
    },
    dependents: [
        {
            name : first
        },
        {
            name : second
        }
    ]
} = john;

console.log( yearsOld, city, pinCode, first, second );
