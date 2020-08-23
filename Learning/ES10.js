// ES10

// .flat() for arrays
const array = [1, 2, 3, 4, 5];
array.flat(); // returns [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]];
array2.flat(); // returns [1, 2, 3, 4, 5]

const array3 = [1, 2, [3, 4, [5, 6]]];
array3.flat(); // returns [1, 2, 3, 4, [5, 6]];
array3.flat(2); // returns [1, 2, 3, 4, 5, 6]

const entries = ['bob', 'alex',,,,,,'sally',,,,,,,'cindy'];
entries.flat; // returns ['bob', 'alex', 'sally', 'cindy']

// .flatMap()

// .trimStart(), trimEnd()
let userEmail = '              eddytheeagle@gmail.com';
let userEmail2 = 'johnnydangerdanger@gmail.com       ';
userEmail.trimStart(); // returns 'eddytheeagle@gmail.com'
userEmail2.trimEnd(); // returns 'johnnydangerdanger@gmail.com'

// Object.fromEntries(), k,v pair to an object. Opposite of Object.entries()!
const userProfiles = [
  ['commanderTom', 23],
  ['derekZlander', 40],
  ['hansel', 15]
]
console.log(Object.fromEntries(userProfiles));

// try - catch block update! Not obligated to pass any parameters to the catch.
try {
  bob + 5;
} catch {
  console.error('You screwed-up!');
}
try {
  bob + 5;
} catch(error) {
  console.error('You screwed-up!\n' + error );
}
