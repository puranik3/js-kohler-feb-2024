// primitives are compared by value
const prices = [ 40, 20, 35, 40, 90, 100, 25, 65, 50, 45 ]; // array of primitive values
console.log( 'prices includes 90?', prices.includes( 90 ) ); // true

// non-primitives are compared by references
const mark = {
    name: 'Mark',
    email: 'mark@kohler.com'
};

const employees = [ // array of non-primitive - items are objects
    {
        name: 'John',
        email: 'john@kohler.com'
    },
    {
        name: 'Jane',
        email: 'jane@kohler.com'
    },
    mark
];

// true / false? - false
console.log(
    'employees includes jane object?',
    employees.includes({ // this object is different from the 2nd item in the array
        name: 'Jane',
        email: 'jane@kohler.com'
    })
);

const mark2 = mark; // mark2, mark refer to the same object (3rd item in the array)

// true
console.log(
    'employees includes jane object?',
    employees.includes( mark2 )
);
