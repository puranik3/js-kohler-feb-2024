/*
    Create a movie object that represents details of your favorite movie. Suggested information 
    to have in the object
    
    Properties
    - name
    - cast (an array of strings with cast member's names), 
    - yearOfRelease
    - boxOfficeCollection
    
    Methods
    - addToCast( newMember ) that accepts a new cast member's name and adds to the cast array
    - addToCollection( amount ) that accepts box  office collections for a week and adds it to the current boxOfficeCollection
    
    (10 minutes) 
 */
const sholay = {
    name: 'Sholay',
    cast: [ 'Amitabh', 'Hema', 'Dharmendra', 'Jaya' ],
    yearOfRelease: 1975,
    boxOfficeCollection: 20000000,
    addToCast: function( newMember ) {
        this.cast.push( newMember );
    },
    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
};

sholay.addToCast( 'Sanjeev' );
sholay.addToCollection( 5000000 );
console.log( sholay );