const jonathan = {
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
            age: 7,
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
    ],
    changeAddress: function( city, pinCode ) {
        this.address.city = city;
        this.address.pinCode = pinCode;
    },
    // addEmail: function( email ) {
    addEmail( email ) { // new syntax for methods introduced in ES2015
        this.emails.push( email );
    }
};

jonathan.changeAddress( 'Gurgaon', 120120 );
jonathan.addEmail( 'john@outlook.com' );

console.log( jonathan );