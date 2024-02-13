// find(), filter(), forEach(), map() -> array iterator methods
const employees = [ // array of non-primitive - items are objects
    {
        name: 'John',
        email: 'john@kohler.com',
        location: 'Noida'
    },
    {
        name: 'Jane',
        email: 'jane@kohler.com',
        location: 'Bengaluru'
    },
    {
        name: 'Mark',
        email: 'mark@kohler.com',
        location: 'Bengaluru'
    }
];

// forEach() -> a simpler for loop
employees.forEach(function( employee, idx ) { // iterator function
    employee.company = 'Kohler';
    console.log( employee, idx );
});

console.log( employees );

// find() -> first item that satisfies a condition
const bengaluruEmployee = employees.find(function( employee ) {
    return employee.location === 'Bengaluru';
});
console.log( 'Bengaluru employee = ', bengaluruEmployee );

// filter() -> all matches
const bengaluruEmployees = employees.filter(function( employee ) {
    return employee.location === 'Bengaluru';
});
console.log( 'Bengaluru employees = ', bengaluruEmployees );

// map() -> [ 'john@kohler.com', 'jane@kohler.com', 'mark@kohler.com' ]
const emails = employees.map(function( employee ) {
    return employee.email;
});
console.log( emails );