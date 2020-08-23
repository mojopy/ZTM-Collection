// ES7 - Small changes
// .includes()
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dog')); // true
console.log(pets.includes('bird')); // false

// exponential operator
const square = (x) => x**2;
const cube = (y) => y**3;

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log('has *explicit* John:', dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
console.log('has *partial* John:', dragons.filter(name => name.includes('John')));
// Checks for partial character(s) match due to now checking individual strings rather than values within an array.

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerHundred = (z) => z**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log('100 to the power of 100: ', powerHundred(100));
console.log('1k to the power of 100: ', powerHundred(1000));
console.log('10k to the power of 100: ', powerHundred(10000));
