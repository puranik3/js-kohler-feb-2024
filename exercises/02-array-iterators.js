// Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map, reduce, some) 
 
const persons = [ 
    { 
        name: 'John', 
        salary: 1000, 
        age: 32, 
        emails: [ 
            'john@gmail.com', 
            'john@example.com' 
        ] 
    }, 
    { 
        name: 'Jane', 
        age: 28, 
        salary: 2000, 
        emails: [ 
            'jane@gmail.com', 
            'jane@example.com', 
            'jane@yahoo.com', 
        ] 
    }, 
    { 
        name: 'Mark', 
        age: 46, 
        salary: 3000, 
        emails: [ 
            'mark@gmail.com', 
            'mark@example.com' 
        ] 
    }, 
    { 
        name: 'Mary', 
        age: 44, 
        salary: 4000, 
        emails: [ 
            'mary@gmail.com', 
            'mary@example.com' 
        ] 
    } 
]; 
 
// • Find all persons whose are 35 years or older 
const personage = persons.filter(function( employee ) {
    return employee.age >= 35;
});
console.log( 'age = ', personage );
 
// • Find a person who has at least 3 email ids
const threeEmailsPerson = persons.find(function( employee ) {
    return employee.emails.length >= 3;
});
console.log( threeEmailsPerson );
 
// • Generate an array of all the names of persons
const personNames = persons.map(function( employee ) {
    return employee.name;
});
console.log( personNames );