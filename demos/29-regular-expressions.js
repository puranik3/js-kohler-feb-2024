const mobile1 = '+917890123456'; // true
const mobile2 = '+915890123456'; // false
const mobile3 = '+91989012345'; // false
const mobile4 = '+81989012345'; // false
const mobile5 = '000+919890123456000'; // false

const indiaMobilePhonePattern = /^\+91[6789][0-9]{9}$/;
console.log( indiaMobilePhonePattern.test( mobile1 ) ); // true
console.log( indiaMobilePhonePattern.test( mobile2 ) ); // false
console.log( indiaMobilePhonePattern.test( mobile3 ) ); // false
console.log( indiaMobilePhonePattern.test( mobile4 ) ); // false
console.log( indiaMobilePhonePattern.test( mobile5 ) ); // false