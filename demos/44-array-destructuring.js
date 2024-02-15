const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// detstructuring - a syntax to create multiple convenient variables that holds values of items in an array
// const mon = days[0], tue = days[1], fri = days[4];
const [ mon, tue, , , fri ] = days;

console.log( mon, tue, fri );