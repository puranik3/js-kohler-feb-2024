function greet( person, greeter ) {
    const greetingWithTitle = greeter( person );

    console.log( `${greetingWithTitle} ${person.name}` );
}

function englishGreeting( person ) {
    if( person.gender === 'female' ) {
        return 'Good morning Ms.';
    } else {
        return 'Good morning Mr.';
    }
}

const john = {
    name: 'John',
    gender: 'male'
};

greet(
    john,
    englishGreeting
);

greet(
    {
        name: 'Jane',
        gender: 'female'
    },
    function( person ) {
        const greetingWithTitle = 'Bonjour ' + ( person.gender === 'female' ? 'Madame' : 'Monsieur' );
        return greetingWithTitle;
    }
);