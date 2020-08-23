// Advanced Arrays

// Basics
const array = [1, 2, 10, 16];
console.log('Original Array', array);

const double = [];
array.forEach(number => {
  double.push(number * 2);
});
console.log('forEach', double);

// map, filter, reduce

// map - shorthanded
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// filter - shorthanded - modulo power
const filterArray = array.filter(num => !(num % 2));
console.log('filter', filterArray);

// reduce - shorthanded
const reduceArray = array.reduce((accumulator, num) => accumulator + num, 5);
console.log('reduce', reduceArray);
