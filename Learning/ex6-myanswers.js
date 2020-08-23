// Complete the below questions using this array:
const array = [{
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const surprisedUsers = [];
array.forEach((e, i) => {
  surprisedUsers.push(e.username + "!");
});
console.log('surprised', surprisedUsers);


//Create an array using map that has all the usernames with a "? to each of the usernames
const confusedUsernames = array.map(e => e.username + "?");
console.log('confused', confusedUsernames);

//Filter the array to only include users who are on team: red
const filteredUsers = array.filter(e => e.team === 'red');
console.log('filtered', filteredUsers);

//Find out the total score of all users using reduce
const reducedScores = array.reduce((acc, e) => acc + e.score, 0);
console.log('total', reducedScores);

// (1), what is the value of i? It's the current iteration.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const booItems = array.map(user => {
  user.items = user.items.map(item => item + "!");
  return user;
})
console.log('boo!', booItems);
