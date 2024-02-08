const john = {
    'name': 'John',
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
            age: 7
        },
        {
            name: 'Jill',
            age: 5
        }
    ],
    projects: [
        {
            name: 'Project X',
            role: 'Web Dev'
        },
        {
            name: 'Projct Y',
            role: 'QA Engineer'
        }
    ]
};

console.log( john );
console.log( john.name, john.age );
console.log( john.address.city );
console.log( john.dependents[1].name );

let key = 'projects';

console.log( john[key][1]['name'] );

john.projects.push({
    name: 'Project Z',
    role: 'Team Lead'
});

console.log( john );

// Object are dynamic - you can add/remove properties at runtime
// We can add new properties at runtime
john.spouse = 'Jane';

console.log( john );

// We can remove properties at runtime
delete john.age;

console.log( john );