// ES8
// .padStart(), .padEnd()
let turtle = 'Turtle';
console.log("blah" + turtle.padStart(20) + "blah");
console.log("blah" + turtle.padEnd(20) + "blah");
turtle = turtle.padStart(13);
console.log("blah" + turtle.padEnd(20) + "blah");

// Trailing commas in parameters and calls is now perfectly valid.
const fun = (a, b, c, d, ) => {
  console.log(a);
}

fun(1, 2, 3, 4, );

// Object.values & Object.entries replaces (sort-of) Object.keys
let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr. Grinch'
}

// Old method with Object.keys
Object.keys(obj).forEach((key, index) => {
  console.log(index, key, obj[key]);
})

// New methods
// Gives ALL the values of the object.
Object.values(obj).forEach(value => {
  console.log(value);
})

// Returns all keys, values pairs as arrays from the object.
Object.entries(obj).forEach(entry => {
  console.log(entry);
})
