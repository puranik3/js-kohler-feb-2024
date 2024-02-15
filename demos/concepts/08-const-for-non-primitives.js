const days = [
    'Monday',
    'Tuesday',
    'Wednesday'
]; // create an array in memory and assigned to days

// create another array in memory and trying to assign to days
// not allowed - error
// days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday'
// ];

days.push( 'Thursday' );

console.log( days );

// Object.freeze() to prevent changes to an array/object