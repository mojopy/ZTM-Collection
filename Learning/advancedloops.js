// Advanced Loops
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 7,
  grapes: 1000,
  bananas: 28
}
// for of ***NOT ENUMERATING***
// Iteratables - arrays, strings
for (item of basket) {
  console.log(item);
}
for (item of 'basket') {
  console.log(item);
}

// for in ***NOT INTERATING***
// Enumerables - objects
for (item in detailedBasket) {
  console.log(item);
}
