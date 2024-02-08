const quote = 'With great power comes responsibility';

console.log( 'Length (number of characters in the quote ', quote.length );

// ES2015 - back tick quote (``)
// multi-line string
const lastLines = `Up above the world so high
Like a diamond in the sky`;

// concatentation using '+' operator
// const rhyme = `Twinkle twinkle little star
// How I wonder what you are
// ` + lastLines + `!`;

// interpolation using ${variable} is supported in `` strings only
const rhyme = `Twinkle twinkle little star How I wonder what you are ${lastLines}!`;

console.log( rhyme );